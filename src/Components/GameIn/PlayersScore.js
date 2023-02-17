import React from "react";
import PlayerScore from "./PlayerScore";

class PlayersScore extends React.Component {

    render() {
        const playersInputDisplay = this.props.players.map((player,i)=>{
            return <PlayerScore key={i.toString()} name={player.playerName} score={player.playerScore.toString()}/>
        });

        return (
            <div className="playersScore">
                <ul>
                    {playersInputDisplay}
                </ul>
            </div>
            );
    }
}

export default PlayersScore;