import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { checkValidRound } from "../../Services/ValidationFormService";
import RoundDetailsHeaderActions from "./RoundDatailsHeaderActions";

class RoundDetailsHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            round:{
                leader: null,
                second: null,
                passed: null,
                type: null,
                points: 0,
                petitAuBout: null,
            }
        }
    }

    handleLeaderUpdate = (e) => {
        this.setState((prevState) => ({
            round:{
                leader: e.target.value,
                second: prevState.round.second,
                passed: prevState.round.passed,
                type: prevState.round.type,
                points: prevState.round.points,
                petitAuBout: prevState.round.petitAuBout
            }
        }));
    }

    handleSecondUpdate = (e) => {
        this.setState((prevState) => ({
            round:{
                leader: prevState.round.leader,
                second: e.target.value,
                passed: prevState.round.passed,
                type: prevState.round.type,
                points: prevState.round.points,
                petitAuBout: prevState.round.petitAuBout
            }
        }));
    }

    handlePassedUpdate = (e) => {
        this.setState((prevState) => ({
            round:{
                leader: prevState.round.leader,
                second: prevState.round.second,
                passed: e.target.value,
                type: prevState.round.type,
                points: prevState.round.points,
                petitAuBout: prevState.round.petitAuBout
            }
        }));
    }

    handleTypeUpdate = (e) => {
        this.setState((prevState) => ({
            round:{
                leader: prevState.round.leader,
                second: prevState.round.second,
                passed: prevState.round.passed,
                type: e.target.value,
                points: prevState.round.points,
                petitAuBout: prevState.round.petitAuBout
            }
        }));
    }

    handlePointUpdate = (e) => {
        this.setState((prevState) => ({
            round:{
                leader: prevState.round.leader,
                second: prevState.round.second,
                passed: prevState.round.passed,
                type: prevState.round.type,
                points: parseInt(e.target.value),
                petitAuBout: prevState.round.petitAuBout
            }
        }));
    }

    handlePetitAuBoutUpdate = (e) => {
        this.setState((prevState) => ({
            round:{
                leader: prevState.round.leader,
                second: prevState.round.second,
                passed: prevState.round.passed,
                type: prevState.round.type,
                points: prevState.round.points,
                petitAuBout: e.target.value
            }
        }));
    }

    handleValidateRound = () => {
        if(!checkValidRound(this.state.round,this.props.players)) {
            alert("Not a valid round");
            return;
        }

        this.props.handleValidateRound(this.state.round);
        this.setState({round:{
                leader: null,
                second: null,
                passed: null,
                type: null,
                points: 0,
                petitAuBout: null
            }
        });
    }

    handleValidateAddMisere = (miserePlayer) => {
        this.props.handleValidateAddMisere(miserePlayer);
    }

    render() {
        //Init leader select depending on the players nr
        var leaderAndSecondSelect = [];
        for(var i=0; i<this.props.players.length; i++) {
            leaderAndSecondSelect.push(<MenuItem key={i} value={i}>{this.props.players[i].playerName}</MenuItem>);
        } 

        //Init second selector depending on the players nr
        var secondSelect;
        if(this.props.players.length===5) {
            secondSelect = <label>
                <Typography variant="h6">Second :</Typography>
                <FormControl fullWidth>
                    <InputLabel id="leader-label">Player who lead the round</InputLabel>
                    <Select
                        labelId="second-label"
                        id="second-select"
                        value={this.state.round.second}
                        label="Player who second"
                        onChange={this.handleSecondUpdate}>
                            {leaderAndSecondSelect}
                    </Select>
                </FormControl>
            </label>
        }

        return (
            <div className="roundDetailsHeader">
                <label>
                    <Typography variant="h6">Leader :</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="leader-label">Player who lead the round</InputLabel>
                        <Select
                            labelId="leader-label"
                            id="leader-select"
                            value={this.state.round.leader}
                            label="Player who lead"
                            onChange={this.handleLeaderUpdate}>
                                {leaderAndSecondSelect}
                        </Select>
                    </FormControl>
                </label>
                {secondSelect}
                <label>
                    <Typography variant="h6">Passed :</Typography>
                    <FormControl fullWidth>
                        <RadioGroup
                            row
                            value={this.state.round.passed}
                            name="radio-buttons-group"
                            onChange={this.handlePassedUpdate}
                        >
                            <FormControlLabel value='true' control={<Radio />} label="Yes" />
                            <FormControlLabel value='false' control={<Radio />} label="No" />
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
                            value={this.state.round.type}
                            label="Leader made ..."
                            onChange={this.handleTypeUpdate}>
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
                    <TextField 
                        value={this.state.round.points} 
                        fullWidth 
                        id="outlined-basic" 
                        label="Points" 
                        variant="outlined" 
                        onChange={this.handlePointUpdate}/>
                </label>
                <label>
                    <Typography variant="h6">Petit au bout :</Typography>
                    <FormControl fullWidth>
                        <RadioGroup
                            row
                            value={this.state.round.petitAuBout}
                            name="radio-buttons-group"
                            onChange={this.handlePetitAuBoutUpdate} 
                        >
                            <FormControlLabel value='true' control={<Radio />} label="Yes" />
                            <FormControlLabel value='false' control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </label>
                <RoundDetailsHeaderActions 
                    handleValidateRound={this.handleValidateRound} 
                    handleValidateAddMisere={this.handleValidateAddMisere} 
                    players={this.props.players}/>
            </div>
        );
    }
}

export default RoundDetailsHeader;