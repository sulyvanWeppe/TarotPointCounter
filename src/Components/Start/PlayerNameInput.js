import { TextField } from "@mui/material";
import React from "react";

class PlayerNameInput extends React.Component {
    render() {
        return (
            <li>
                <label>
                    Player {this.props.id} name : 
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                </label>
            </li>
        );
    }
}

export default PlayerNameInput;