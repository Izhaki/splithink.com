import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  image: {
    marginTop: theme.spacing(1),
  },
}));

export default function TourLeft() {
  const classes = useStyles();
  return (
    <img
      src="/images/noun_down_454399.svg"
      alt="mid arrow"
      width="50"
      height="50"
      className={classes.image}
    />
  );
}
