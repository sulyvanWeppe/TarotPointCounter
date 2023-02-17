import { TextField, Typography } from "@mui/material";
import React from "react";

class PlayerScore extends React.Component {

    render() {
        return (
            <li>
                <label>
                    <Typography variant="h6">{this.props.name}'s score :</Typography> 
                    <TextField id="outlined-basic" label="Score" variant="outlined" value={this.props.score}/>
                </label>
            </li>
        );
    }
}

export default PlayerScore;