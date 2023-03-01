import { Extension } from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, Divider, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import GameItem from "./GameItem";

class AllGames extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            refreshIsNeeded: true
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/gamesWDetails")
            .then(response => {
                this.setState({games: response.data.games, refreshIsNeeded: false});
                console.log(response.data);
                console.log(this.state.games);
            })
            .catch(err => {
                alert("Errror getting all the games")
            });
    }    
    
    componentDidUpdate() {
        if(!this.state.refreshIsNeeded) {
            return;
        }

        axios.get("http://localhost:8080/gamesWDetails")
            .then(response => {
                this.setState({games: response.data.games, refreshIsNeeded: false});
            })
            .catch(err => {
                alert("Errror getting all the games")
            });
    }

    render() {
        var display = [];
        if(this.state.games!==null && this.state.games.length!==0) {
            for(let i=0; i<this.state.games.length; i++) {
                display.push(
                    <div>
                        <GameItem game={this.state.games[i]}/>
                        <Divider variant="inset" component="li" />
                    </div>)
            }
        }

        return (
            <Box sx={{ width: '100%'}}>
                <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                    {display}
                </List>
            </Box>
        );
    }
}

export default AllGames;