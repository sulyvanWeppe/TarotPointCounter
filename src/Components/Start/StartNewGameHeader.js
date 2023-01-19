import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

class StartNewGameHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    Number of Players :
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