import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { checkValidMisere } from "../../Services/ValidationFormService";

class AddMisereDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            miserePlayer:null
        }
    }

    handleMiserePlayerUpdate = (e) => {
        this.setState({miserePlayer: e.target.value});
    }

    handleValidateAddMisere = () => {
        if(!checkValidMisere(this.state.miserePlayer)) {
            alert("A player must be selected");
            return;
        }

        this.props.handleValidateAddMisere(this.state.miserePlayer);
        this.setState({miserePlayer:null});
    }

    render() {        
        //Init misere player selector depending on the players nr
        var miserePlayerSelect = [];
        for(var i=0; i<this.props.players.length; i++) {
            miserePlayerSelect.push(<MenuItem key={i} value={i}>{this.props.players[i].playerName}</MenuItem>);
        } 

        return (
            <Dialog fullWidth={true} onClose={this.props.onClose} open={this.props.isOpen} >
                <DialogTitle>Add misere</DialogTitle>
                <DialogContent>
                    <label>
                        <Typography variant="h6">Player :</Typography>
                        <FormControl fullWidth>
                            <InputLabel id="leader-label">Player having the misere</InputLabel>
                            <Select
                                labelId="miser-player-label"
                                id="miser-player-select"
                                value={this.state.miserePlayer}
                                label="Player who lead"
                                onChange={this.handleMiserePlayerUpdate}>
                                    {miserePlayerSelect}
                            </Select>
                        </FormControl>
                    </label>
                    <DialogActions>
                        <Button variant="contained" onClick={this.handleValidateAddMisere}>Validate</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        );
    }
}

export default AddMisereDialog;