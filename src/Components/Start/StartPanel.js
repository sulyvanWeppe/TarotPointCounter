import { Divider, Grid } from "@mui/material";
import React from "react";
import StartNewGameHeader from "./StartNewGameHeader";
import StartNewGamePlayersEntry from "./StartNewGamePlayersEntry";

class StartPanel extends React.Component {
    handleNrPlayersChange = (newNrPlayers) => {
        this.props.handleNrPlayersChange(newNrPlayers);
    }

    handlePlayerNameChange = (newName,playerId) => {
        this.props.handlePlayerNameChange(newName,playerId);
    }

    handleGameStart = () => {
        this.props.handleGameStart()
    }

    render() {
        return (
            <div className="startPanel">
                <Grid container spacing={2} direction="row" alignItems="center">
                    <Grid item xs={3}>
                        <StartNewGameHeader handleNrPlayersChange={this.handleNrPlayersChange}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Divider variant="fullWidth" style={{height: 500}} orientation="vertical" flexItem/>
                    </Grid>
                    <Grid item xs={6}>
                        <StartNewGamePlayersEntry 
                            nrPlayers={this.props.nrPlayers} 
                            handlePlayerNameChange={this.handlePlayerNameChange}
                            handleGameStart={this.handleGameStart}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default StartPanel;