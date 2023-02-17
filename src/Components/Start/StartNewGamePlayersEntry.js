import { Button } from '@mui/material';
import React from 'react';
import PlayerNameInput from './PlayerNameInput';

class StartNewGamePlayersEntry extends React.Component {

    handleStartPress = () => {
        this.props.handleGameStart();
    }

    handlePlayerNameChange = (newName, playerId) => {
        this.props.handlePlayerNameChange(newName,playerId);
    }

    render() {
        var playersId = [];
        for(var i=1; i<=this.props.nrPlayers; i++) {
            playersId.push(i);
        }
        const playersInputDisplay = playersId.map(playerId => (
            <PlayerNameInput key={playerId.toString()} id={playerId} handlePlayerNameChange={this.handlePlayerNameChange}/>
        ));
        

        return (
            <div className="startNewGamePlayersEntry">
                <ul>{playersInputDisplay}</ul>
                <Button variant="contained" onClick={this.handleStartPress}>Start</Button>
            </div>
            );
    }
}

export default StartNewGamePlayersEntry;