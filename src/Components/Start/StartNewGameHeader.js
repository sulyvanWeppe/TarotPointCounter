import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

class StartNewGameHeader extends React.Component {
    constructor(props) {
        super(props);
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
                            value={4}
                            label="Number"
                            onChange={null}>
                                <MenuItem value={3}>Three</MenuItem>
                                <MenuItem value={4}>Four</MenuItem>
                                <MenuItem value={5}>Five</MenuItem>
                        </Select>
                    </FormControl>
                </label>
                <Button variant="contained">New Game</Button>
            </div>
        );
    }
}

export default StartNewGameHeader;