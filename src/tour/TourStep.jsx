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
    bottom: 50,
    minWidth: 120,
    textAlign: 'center',
    fontFamily: theme.typography.tour.fontFamily,
    transform: `translateX(-50%)`,
  },
  title: {
    fontSize: '1.1rem',
  },
  subTitle: {
    color: theme.palette.grey[500],
  },
}));

export default function TourStep({ show, title, subTitle, left, lift }) {
  const classes = useStyles();
  return (
    <Fade in={show}>
      <div className={classes.step} style={{ left, bottom: lift ? 50 : undefined }}>
        <div className={classes.title}>{title}</div>
        <div className={classes.subTitle}>{subTitle}</div>
        {title && <Arrow />}
      </div>
    </Fade>
  );
}
