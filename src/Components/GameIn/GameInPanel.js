import { Divider, Grid } from "@mui/material";
import React from "react";
import PlayersScore from "./PlayersScore";
import RoundDetailsHeader from "./RoundDetailsHeader";

class GameInPanel extends React.Component {
    handleValidateRound = (round) => {
        this.props.handleValidateRound(round);
    }

    handleValidateAddMisere = (miserePlayer) => {
        this.props.handleValidateAddMisere(miserePlayer);
    }

    render() {
        return (
            <div className="gameInPanel">

                <Grid container spacing={2} direction="row" alignItems="center">
                    <Grid item xs={5}>
                        <RoundDetailsHeader 
                            players={this.props.players} 
                            handleValidateRound={this.handleValidateRound} 
                            handleValidateAddMisere={this.handleValidateAddMisere}/>
                    </Grid>
                    <Grid item xs={1}>
                        <Divider variant="fullWidth" style={{height: 500}} orientation="vertical" flexItem/>
                    </Grid>
                    <Grid item xs={6}>
                        <PlayersScore players={this.props.players}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default GameInPanel;