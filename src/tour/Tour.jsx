import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TourStep from './TourStep';

const useStyles = makeStyles({
  tour: {
    position: 'relative',
  },
});

export default function Tour({ step }) {
  const classes = useStyles();
  return (
    <div className={classes.tour}>
      <TourStep show={step === 0} title="This is you" subTitle="write something" left="25%" />
      <TourStep show={step === 1} subTitle="press ENTER when done" left="25%" />
      <TourStep show={step === 2} title="ALSO you" subTitle="write something" left="75%" />
      <TourStep show={step === 3} subTitle="press ENTER when done" left="75%" />
      <TourStep show={step === 4} title="Menu" left="50%" lift />
    </div>
  );
}
