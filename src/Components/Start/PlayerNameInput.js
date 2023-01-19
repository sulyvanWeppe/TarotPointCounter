import { TextField } from "@mui/material";
import React from "react";

class PlayerNameInput extends React.Component {
    render() {
        return (
            <div>
                <label>
                    Player {this.props.id} name : 
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                </label>
            </div>
        );
    }
}

export default PlayerNameInput;