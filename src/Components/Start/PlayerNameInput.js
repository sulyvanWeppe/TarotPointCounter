import { TextField, Typography } from "@mui/material";
import React from "react";

class PlayerNameInput extends React.Component {
    render() {
        return (
            <li>
                <label>
                    <Typography variant="h6">Player {this.props.id} name :</Typography> 
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                </label>
            </li>
        );
    }
}

export default PlayerNameInput;