import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import rabbit from '../../../assets/goals_assets/rabbit1.svg'

import Chip from '@material-ui/core/Chip';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function FormDialog() {
    const [open, setOpen] = React.useState(true);
    const [alignment, setAlignment] = React.useState('left');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Set a new goal</DialogTitle>
                <DialogContent>

                    <DialogContentText>
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Goal name..."
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description..."
                        variant="outlined"
                        fullWidth
                    />

                </DialogContent>

                <DialogTitle>Choose Goal type</DialogTitle>

                <DialogContent>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton varia-label="left aligned">
                            <img src={rabbit} height="90" width="90" alt="short term"></img>
                        </ToggleButton>

                        <ToggleButton aria-label="centered">
                            <img src={rabbit} height="90" width="90" alt="long term"></img>

                        </ToggleButton>


                    </ToggleButtonGroup>

                </DialogContent>

                <DialogTitle>Add tags</DialogTitle>

                <DialogContent>
                    <Chip
                        variant="outlined"
                        label="due date"
                        onClick={handleClick}
                    />

                    <Chip
                        variant="outlined"
                        label="due date"
                        onClick={handleClick}
                    />

                </DialogContent>


                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Add Goal
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}