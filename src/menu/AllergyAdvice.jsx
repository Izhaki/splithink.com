import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  wrap: {
    justifyContent: 'center',
  },
  advice: {
    padding: theme.spacing(2),
    backgroundColor: 'black',
    color: 'white',
  },
}));

const AllergyAdvice = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrap}>
      <Grid item xs={12} className={classes.advice}>
        <Typography variant="h5" component="h3" align="center">
          {`It's Oh so Private`}
        </Typography>
        <Typography variant="body1" component="p" align="center">
          <b>Nothing you write is saved or sent</b>
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Everything you write will be gone forever once you close or refresh the page
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AllergyAdvice;
