import axios from "axios";
import React from "react";
import { countMisere, countRound } from "../Services/PointsCounterService";
import { checkPlayersNames } from "../Services/ValidationFormService";
import GameInPanel from "./GameIn/GameInPanel";
import StartPanel from "./Start/StartPanel";

class Panel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gameUuid: null,
            isGameStarted: false,
            players: new Array(4).fill(null)
        };
    }

    handleNrPlayersChange = (newPlayersNr) => {
        this.setState({
            players: new Array(newPlayersNr).fill(null)
        })
    }

    handlePlayerNameChange = (newName,playerId) => {
        let newPlayers = this.state.players.map((player,i) => {
            if(i===playerId-1) {
                return {playerName: newName,playerScore: 0};
            }
            else {
                return {playerName: (player ? player.playerName : ""),playerScore: 0};
            }
        });
    
        this.setState({
            players: newPlayers
        });
    }

    handleGameStart = () => {
        //Check if all the names are provided
        if(!checkPlayersNames(this.state.players)) {
            return alert("Players' names are not valid");
        }
        else {
            //Create the game in the DB
            var gameUuid;
            axios.post("http://localhost:8080/game",{nrPlayers: this.state.players.length})
            .then(response => {
                gameUuid = response.data;
                
                let playersScorePostRequest = {
                    gameUuid: gameUuid,
                    playersScore: this.state.players
                };
                axios.post("http://localhost:8080/scores", playersScorePostRequest)
                    .catch(err => {alert("Error while creating the new game")});

                
                this.setState({
                    gameUuid: gameUuid,
                    isGameStarted: true
                });
            })
            .catch(err => {alert("Error while creating the new game")});
        }
    }

    handleValidateRound = (round) => {
        var newPlayers = [...this.state.players];
        countRound(newPlayers,round);
    
        //Update scores in the DB
        let playersScorePatchRequest = {
            gameUuid: this.state.gameUuid,
            playersScore: newPlayers
        };

        axios.patch("http://localhost:8080/scores", playersScorePatchRequest)
            .then(response => {this.setState({
                    players: newPlayers
                 })
                }
            )
            .catch(err => {alert("Error when trying to update the scores in the DB")});
    }

    handleValidateAddMisere = (miserePlayer) => {
        var newPlayers = [...this.state.players];
        countMisere(miserePlayer,newPlayers);
    
        this.setState({
            players: newPlayers
        });
    }

    render() {
        var display;
        if (this.state.isGameStarted) {
            display = <GameInPanel 
                nrPlayers={this.state.players.length}
                players={this.state.players}
                handleValidateRound={this.handleValidateRound}
                handleValidateAddMisere={this.handleValidateAddMisere}/>;
        }
        else {
            display = <StartPanel 
                handleNrPlayersChange={this.handleNrPlayersChange} 
                nrPlayers={this.state.players.length}
                handlePlayerNameChange={this.handlePlayerNameChange}
                handleGameStart={this.handleGameStart}/>;
        }

        return (
            <div className="mainPanel">
                {display}
            </div>
        )
    }
}

export default Panel;