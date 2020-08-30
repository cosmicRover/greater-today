import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import rabbit from '../../../assets/goals_assets/rabbit1.svg'
import clsx from 'clsx'

import Chip from '@material-ui/core/Chip';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import styled from '@emotion/styled';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { createMuiTheme } from '@material-ui/core/styles'
import { FormControl } from '@material-ui/core';

export default function FormDialog() {
    const [open, setOpen] = React.useState(true);
    const [alignment, setAlignment] = React.useState('left');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18'));
    var [values, setValues] = React.useState({
        title: 'WOWOW'
    });

    const handleTextChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

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

    
    const style = {
        root: {
            '&$enabled': {
                color: 'white',
            },
        },
        disabled: {},
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(`selected date is ${selectedDate}`)
    };

    // const handleTextChange =
    

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                
                <DialogTitle id="form-dialog-title">
                    <span style={{ color: "#6481F6" }}>
                        Set a new goal
                    </span>
                </DialogTitle>
                <DialogContent>

                    <DialogContentText>
                    </DialogContentText>
                    
                    <TextField
                        // color="#6481F6"
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Goal name..."
                        variant="outlined"
                        fullWidth
                        value={values.title}
                        onChange={event => {
                            handleTextChange('title')
                            console.log(`TEXT CHANGED HERE --->> ${values.title}`)
                            //TODO: Follow this to get values https://www.quora.com/In-React-how-do-you-get-values-from-Material-UI-TextField-components
                        }}
                    />

                    <TextField
                        margin="dense"
                        id="name"
                        label="Description..."
                        variant="outlined"
                        fullWidth
                    />

                </DialogContent>

                <DialogTitle><span style={{ color: "#6481F6" }}>
                    Choose goal type
                    </span></DialogTitle>
                  
                    <DialogContent>

                        <ToggleButtonGroup
                            
                            value={alignment}
                            exclusive
                            onChange={handleAlignment}
                            aria-label="text alignment">

                            {/*TODO: Get selectable button */ }    
                            
                            <ToggleButton varia-label="left aligned"
                            classes={{root: style.root}}
                            >
                                <img src={rabbit} height="90" width="90" alt="short term"></img>
                            </ToggleButton>

                            <ToggleButton aria-label="centered">
                                <img src={rabbit} height="90" width="90" alt="long term"></img>
                            </ToggleButton>
                        
                        
                        </ToggleButtonGroup>

                    </DialogContent>
                    
                

                <DialogTitle><span style={{ color: "#6481F6" }}>
                    Add tags
                    </span></DialogTitle>

                <DialogContent>
                    <TextField
                        id="date"
                        label="Due date"
                        type="date"
                        defaultValue="2017-05-24"
                        minDate ={Date()}//pass in today's date as min date
                        value = {selectedDate}
                        onChange={handleDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Add Goal
                        
                        {/*TODO: onSubmit format and add data to the store */}

                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}