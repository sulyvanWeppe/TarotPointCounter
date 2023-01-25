import { TextField } from "@mui/material";
import React from "react";

class PlayerScore extends React.Component {

    render() {
        return (
            <li>
                <label>
                    Player {this.props.id} score : 
                    <TextField id="outlined-basic" label="Score" variant="outlined" />
                </label>
            </li>
        );
    }
}

export default PlayerScore;