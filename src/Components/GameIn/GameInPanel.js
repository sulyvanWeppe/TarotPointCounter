import { Divider } from "@mui/material";
import React from "react";
import PlayersScore from "./PlayersScore";
import RoundDetailsHeader from "./RoundDetailsHeader";

class GameInPanel extends React.Component {

    render() {
        return (
            <div className="gameInPanel">
                <RoundDetailsHeader/>
                <Divider class="dividerGameInPanel"/>
                <PlayersScore/>
            </div>
        );
    }
}

export default GameInPanel;