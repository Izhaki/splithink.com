import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Arrow from './Arrow';

const useStyles = makeStyles(theme => ({
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: '100%',
    minWidth: 120,
    textAlign: 'center',
    fontFamily: ['Chalkboard SE', 'Comic Neue', 'Comic Sans MS', 'Comic Sans'].join(','),
    transform: `translateX(-50%)`,
  },
  title: {
    fontSize: '1.1rem',
  },
  subTitle: {
    color: theme.palette.grey[500],
  },
}));

export default function TourStep({ show, title, subTitle, left }) {
  const classes = useStyles();
  return (
    <Fade in={show}>
      <div className={classes.step} style={{ left }}>
        <div className={classes.title}>{title}</div>
        <div className={classes.subTitle}>{subTitle}</div>
        {title && <Arrow />}
      </div>
    </Fade>
  );
}
