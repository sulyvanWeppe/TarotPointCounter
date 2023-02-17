import { Button, Grid } from "@mui/material";
import React from "react";
import AddMisereDialog from "./AddMisereDialog";

class RoundDetailsHeaderActions extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            openAddMisereDialog: false
        }
    }

    handleOpenAddMisereDialog = () => {
        this.setState({openAddMisereDialog: true});
    }

    handleCloseAddMisereDialog = () => {
        this.setState({openAddMisereDialog: false});
    }

    handleValidateRound = () => {
        this.props.handleValidateRound();
    }

    handleValidateAddMisere = (miserePlayer) => {
        this.props.handleValidateAddMisere(miserePlayer);
        this.setState({openAddMisereDialog:false});
    }

    render() {
        return (
            <div>
                <Grid container spacing={2} direction="row" alignItems="center">
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <Button variant="contained" onClick={this.handleValidateRound}>Validate</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" onClick={this.handleOpenAddMisereDialog}>Add Misere</Button>
                        <AddMisereDialog 
                            isOpen={this.state.openAddMisereDialog} 
                            onClose={this.handleCloseAddMisereDialog} 
                            players={this.props.players}
                            handleValidateAddMisere={this.handleValidateAddMisere}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default RoundDetailsHeaderActions;