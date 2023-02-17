import React from "react";
import { countMisere, countRound } from "../Services/PointsCounterService";
import { checkPlayersNames } from "../Services/ValidationFormService";
import GameInPanel from "./GameIn/GameInPanel";
import StartPanel from "./Start/StartPanel";

class Panel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
            this.setState({isGameStarted: true});
        }
    }

    handleValidateRound = (round) => {
        var newPlayers = [...this.state.players];
        countRound(newPlayers,round);
    
        this.setState({
            players: newPlayers
        });
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