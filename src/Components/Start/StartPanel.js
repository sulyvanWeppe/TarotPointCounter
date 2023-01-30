import { Divider } from "@mui/material";
import React from "react";
import StartNewGameHeader from "./StartNewGameHeader";
import StartNewGamePlayersEntry from "./StartNewGamePlayersEntry";

class StartPanel extends React.Component {

    render() {
        return (
            <div>
                <StartNewGameHeader/>
                <Divider class="dividerStartPanel"/>
                <StartNewGamePlayersEntry/>
            </div>
        );
    }
}

export default StartPanel;