import React from 'react';
import RoundDetailsHeader from './Components/GameIn/RoundDetailsHeader';
import StartNewGameHeader from './Components/Start/StartNewGameHeader';
import StartNewGamePlayersEntry from './Components/Start/StartNewGamePlayersEntry';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RoundDetailsHeader />
            </div>
        );
    }
}

export default App