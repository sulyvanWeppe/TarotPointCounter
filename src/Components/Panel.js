import axios from "axios";
import React from "react";
import { countMisere, countRound } from "../Services/PointsCounterService";
import { checkPlayersNames } from "../Services/ValidationFormService";
import GameInPanel from "./GameIn/GameInPanel";
import MainDrawer from "./Drawer/MainDrawer";
import StartPanel from "./Start/StartPanel";
import AllGames from "./AllGames/AllGames";

class Panel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display: {
                activeDisplay: 'New Game'
            },
            game: {
                gameUuid: null,
                isGameStarted: false,
                players: new Array(4).fill(null)
            }
        };
    }

    handleDisplayChange = (newActiveDisplay) => {
        this.setState((prevState) => (
            {
                display:{
                    activeDisplay: newActiveDisplay
                }
            }
        ));
    }

    handleNrPlayersChange = (newPlayersNr) => {
        this.setState((prevState) => ({
            game: {
                gameUuid: prevState.gameUuid,
                isGameStarted: prevState.isGameStarted,
                players: new Array(newPlayersNr).fill(null)
            }
        }))
    }

    handlePlayerNameChange = (newName,playerId) => {
        let newPlayers = this.state.game.players.map((player,i) => {
            if(i===playerId-1) {
                return {playerName: newName,playerScore: 0};
            }
            else {
                return {playerName: (player ? player.playerName : ""),playerScore: 0};
            }
        });
    
        this.setState((prevState) => ({
            game: {
                gameUuid: prevState.gameUuid,
                isGameStarted: prevState.isGameStarted,
                players: newPlayers
            }
        }));

    }

    handleGameStart = () => {
        //Check if all the names are provided
        if(!checkPlayersNames(this.state.game.players)) {
            return alert("Players' names are not valid");
        }
        else {
            //Create the game in the DB
            var gameUuid;
            axios.post("http://localhost:8080/game",{nrPlayers: this.state.game.players.length})
            .then(response => {
                gameUuid = response.data;
                
                let playersScorePostRequest = {
                    gameUuid: gameUuid,
                    playersScore: this.state.game.players
                };
                axios.post("http://localhost:8080/scores", playersScorePostRequest)
                    .then(
                        this.setState((prevState) => ({
                            game: {
                                gameUuid: gameUuid,
                                isGameStarted: true,
                                players: prevState.game.players
                            }
                        }))
                    )
                    .catch(err => {alert("Error while creating the new game")});
            })
            .catch(err => {alert("Error while creating the new game")});
        }
    }

    handleValidateRound = (round) => {
        var newPlayers = [...this.state.game.players];
        countRound(newPlayers,round);
    
        //Update scores in the DB
        let playersScorePatchRequest = {
            gameUuid: this.state.game.gameUuid,
            playersScore: newPlayers
        };

        axios.patch("http://localhost:8080/scores", playersScorePatchRequest)
            .then(response => {this.setState((prevState) => ({
                        game: {
                            gameUuid: prevState.game.gameUuid,
                            isGameStarted: prevState.game.isGameStarted,
                            players: newPlayers
                        }
                    }))
                }
            )
            .catch(err => {alert("Error when trying to update the scores in the DB")});
    }

    handleValidateAddMisere = (miserePlayer) => {
        var newPlayers = [...this.state.game.players];
        countMisere(miserePlayer,newPlayers);
    
        this.setState((prevState) => ({
            game: {
                gameUuid: prevState.game.gameUuid,
                isGameStarted: prevState.game.isGameStarted,
                players: newPlayers
            }
        }));
    }

    render() {
        var display;
        switch (this.state.display.activeDisplay) {
            case 'New Game':
                if (this.state.game.isGameStarted) {
                    display = <GameInPanel 
                        nrPlayers={this.state.game.players.length}
                        players={this.state.game.players}
                        handleValidateRound={this.handleValidateRound}
                        handleValidateAddMisere={this.handleValidateAddMisere}/>;
                }
                else {
                    display = <StartPanel 
                        handleNrPlayersChange={this.handleNrPlayersChange} 
                        nrPlayers={this.state.game.players.length}
                        handlePlayerNameChange={this.handlePlayerNameChange}
                        handleGameStart={this.handleGameStart}/>;
                }
                break;
            case 'All Games':
                display=<AllGames/>;
                break;
            default:
                break;
        }
        

        return (
            <div className="mainPanel">
                <MainDrawer handleDisplayChange={this.handleDisplayChange}/>
                {display}
            </div>
        )
    }
}

export default Panel;