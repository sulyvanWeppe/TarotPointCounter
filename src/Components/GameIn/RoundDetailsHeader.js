import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React from "react";

class RoundDetailsHeader extends React.Component {
    render() {
        return (
            <div className="roundDetailsHeader">
                <label>
                    <Typography variant="h6">Leader :</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="leader-label">Player who lead the round</InputLabel>
                        <Select
                            labelId="leader-label"
                            id="leader-select"
                            value={4}
                            label="Player who lead"
                            onChange={null}>
                                <MenuItem value={1}>One</MenuItem>
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={3}>Three</MenuItem>
                                <MenuItem value={4}>Four</MenuItem>
                        </Select>
                    </FormControl>
                </label>
                <label>
                    <Typography variant="h6">Passed :</Typography>
                    <FormControl fullWidth>
                        <RadioGroup
                            row
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </label>
                <label>
                    <Typography variant="h6">Type :</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="type-label">Leader made ...</InputLabel>
                        <Select
                            labelId="type-label"
                            id="type-select"
                            value="petite"
                            label="Leader made ..."
                            onChange={null}>
                                <MenuItem value="petite">Petite</MenuItem>
                                <MenuItem value="pouce">Pouce</MenuItem>
                                <MenuItem value="garde">Garde</MenuItem>
                                <MenuItem value="gardeSans">Garde sans</MenuItem>
                                <MenuItem value="gardeContre">Garde contre</MenuItem>
                        </Select>
                    </FormControl>
                </label>
                <label>
                    <Typography variant="h6">Points :</Typography>
                    <TextField fullWidth id="outlined-basic" label="Points" variant="outlined" />
                </label>
                <Button variant="contained">Validate</Button>
            </div>
        );
    }
}

export default RoundDetailsHeader;