import { Extension } from "@mui/icons-material";
import { Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

class GameItem extends React.Component {
    render() {
        var playersDisplay = [];
        if(this.props.game.nrPlayers === 3) {
            playersDisplay.push(
                <Grid item xs={4}>
                    {this.props.game.players[0].playerName} : {this.props.game.players[0].playerScore}
                </Grid>
                );
            playersDisplay.push(
                <Grid item xs={4}>
                    {this.props.game.players[1].playerName} : {this.props.game.players[1].playerScore}
                </Grid>
                );
            playersDisplay.push(
                <Grid item xs={4}>
                    {this.props.game.players[2].playerName} : {this.props.game.players[2].playerScore}
                </Grid>
                );
        }
        else if(this.props.game.nrPlayers === 4) {
            playersDisplay.push(
                <Grid item xs={3}>
                    {this.props.game.players[0].playerName} : {this.props.game.players[0].playerScore}
                </Grid>
                );
            playersDisplay.push(
                <Grid item xs={3}>
                    {this.props.game.players[1].playerName} : {this.props.game.players[1].playerScore}
                </Grid>
                );
            playersDisplay.push(
                <Grid item xs={3}>
                    {this.props.game.players[2].playerName} : {this.props.game.players[2].playerScore}
                </Grid>
                );
            playersDisplay.push(
                <Grid item xs={3}>
                    {this.props.game.players[3].playerName} : {this.props.game.players[3].playerScore}
                </Grid>
                );
        }
        else {
            playersDisplay.push(
                <Grid item xs={2}>
                    {this.props.game.players[0].playerName} : {this.props.game.players[0].playerScore}
                </Grid>
                );
            playersDisplay.push(
                <Grid item xs={2}>
                    {this.props.game.players[1].playerName} : {this.props.game.players[1].playerScore}
                </Grid>
                );
            playersDisplay.push(
                <Grid item xs={2}>
                    {this.props.game.players[2].playerName} : {this.props.game.players[2].playerScore}
                </Grid>
                );
            playersDisplay.push(
                <Grid item xs={2}>
                    {this.props.game.players[3].playerName} : {this.props.game.players[3].playerScore}
                </Grid>
                );
            playersDisplay.push(
                <Grid item xs={2}>
                    {this.props.game.players[4].playerName} : {this.props.game.players[4].playerScore}
                </Grid>
                );
        }

        return(
            <ListItem alignItems="flex-start">
                <ListItemIcon>
                    <Extension fontSize="large"/>
                </ListItemIcon>
                <ListItemText
                primary={this.props.game.timestamp}
                secondary={
                    <React.Fragment>
                        <Grid container spacing={2}>
                            {playersDisplay}
                        </Grid>
                    </React.Fragment>
                }
                />
            </ListItem>
        );
    }
}

export default GameItem;