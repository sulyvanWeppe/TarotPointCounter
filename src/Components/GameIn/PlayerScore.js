import { TextField, Typography } from "@mui/material";
import React from "react";

class PlayerScore extends React.Component {

    render() {
        return (
            <li>
                <label>
                    <Typography variant="h6">Player {this.props.id} score :</Typography> 
                    <TextField id="outlined-basic" label="Score" variant="outlined" />
                </label>
            </li>
        );
    }
}

export default PlayerScore;