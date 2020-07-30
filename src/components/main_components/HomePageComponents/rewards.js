import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import expArrow from '../../../assets/arrow.svg';
import streak from '../../../assets/fire.svg';
import coin from '../../../assets/coin.svg';
import award from '../../../assets/award.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Rewards() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <img src={FormRow.relIcon} alt="Icon" max-height={200} max-width={200} />
          item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={6}>
          <FormRow relIcon={expArrow}/>
          <FormRow relIcon={streak}/>
        </Grid>
        <Grid container item xs={12} spacing={6}>
          <FormRow relIcon={award}/>
          <FormRow relIcon={coin}/>
        </Grid>
      </Grid>
    </div>
  );
}
export default Rewards;
