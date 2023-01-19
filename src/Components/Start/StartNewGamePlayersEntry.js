import { Button } from '@mui/material';
import React from 'react';
import PlayerNameInput from './PlayerNameInput';

class StartNewGamePlayersEntry extends React.Component {
    render() {
        const playersId = [1,2,3,4];
        const playersInputDisplay = playersId.map(playerId => (
            <PlayerNameInput key={playerId.toString()} id={playerId} />
        ));

        return (
            <div>
                <ul>{playersInputDisplay}</ul>
                <Button variant="contained">Start</Button>
            </div>
            );
    }
}

export default StartNewGamePlayersEntry;