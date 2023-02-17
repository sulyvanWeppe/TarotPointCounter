import {FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

class StartNewGameHeader extends React.Component {

    handleNrPlayersChange = (event) => {
        this.props.handleNrPlayersChange(event.target.value);
    }

    render() {
        return (
            <div className="startNewGameHeader">
                <label>
                    <Typography variant="h6">Number of Players :</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="players-nr-label">Number</InputLabel>
                        <Select
                            labelId="players-nr-label"
                            id="players-nr-select"
                            label="Number"
                            onChange={this.handleNrPlayersChange}>
                                <MenuItem value={3}>Three</MenuItem>
                                <MenuItem value={4}>Four</MenuItem>
                                <MenuItem value={5}>Five</MenuItem>
                        </Select>
                    </FormControl>
                </label>
            </div>
        );
    }
}

export default StartNewGameHeader;