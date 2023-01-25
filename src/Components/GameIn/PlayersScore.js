import React from "react";
import PlayerScore from "./PlayerScore";

class PlayersScore extends React.Component {

    render() {
        const playersId = [1,2,3,4];
        const playersInputDisplay = playersId.map(playerId => (
            <PlayerScore key={playerId.toString()} id={playerId} />
        ));

        return (
            <ul>
                {playersInputDisplay}
            </ul>
            );
    }
}

export default PlayersScore;