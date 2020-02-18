import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderTop: '10px solid #ddd',
    borderBottom: '10px solid #ddd',
    padding: [[20, 0]],
  },
  header: {
    borderTop: '4px solid #ddd',
    borderBottom: '4px solid #ddd',
    padding: 20,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h1" component="h2">
          Menu
        </Typography>
        <Typography variant="body1">
          <b>Allergy advice: </b>Nothing is saved.
        </Typography>
      </div>
    </div>
  );
}
