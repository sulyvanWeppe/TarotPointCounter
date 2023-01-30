import './App.css';
import { Divider } from '@mui/material';
import React from 'react';
import GameInPanel from './Components/GameIn/GameInPanel';
import PlayersScore from './Components/GameIn/PlayersScore';
import RoundDetailsHeader from './Components/GameIn/RoundDetailsHeader';
import StartNewGameHeader from './Components/Start/StartNewGameHeader';
import StartNewGamePlayersEntry from './Components/Start/StartNewGamePlayersEntry';
import StartPanel from './Components/Start/StartPanel';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <StartPanel/>
                <GameInPanel/>
            </div>
        );
    }
}

export default App