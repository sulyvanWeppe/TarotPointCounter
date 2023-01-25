import { Divider } from "@mui/material";
import React from "react";
import PlayersScore from "./PlayersScore";
import RoundDetailsHeader from "./RoundDetailsHeader";

class GameIn extends React.Component {

    render() {
        return (
            <div>
                <RoundDetailsHeader/>
                <Divider/>
                <PlayersScore/>
            </div>
        );
    }
}

export default GameIn;