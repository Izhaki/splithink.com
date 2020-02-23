import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dish from './Dish';
import dishes from './dishes';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderTop: '20px solid #333',
    borderBottom: '20px solid #333',
    padding: [[4, 0]],
  },
  header: {
    borderTop: '4px solid #333',
    borderBottom: '4px solid #333',
    padding: [[0, 20]],
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    textAlign: 'center',
  },
});

const Section = ({ title, children }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.sectionTitle}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </>
  );
};

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h1">Menu</Typography>
        <Typography variant="body1">
          <b>Allergy advice: </b>We <i>do not</i> save anything you write.
        </Typography>
      </div>
      <div className={classes.section}>
        <Section title="Starters">
          <Dish {...dishes.alterEgo} />
          <Dish {...dishes.mindTheGap} />
        </Section>
        <Section title="Breakfast">
          <Dish {...dishes.dosdonts} loner />
        </Section>
        <Section title="Brunch">
          <Dish {...dishes.wolf} />
          <Dish {...dishes.forAgainst} />
        </Section>
        <Section title="Lunch">
          <Dish {...dishes.obama} />
          <Dish {...dishes.empathy} />
          <Dish {...dishes.betterSelf} />
          <Dish {...dishes.devil} />
        </Section>
        <Section title="Dinner">
          <Dish {...dishes.chatdelune} loner />
        </Section>
      </div>
    </div>
  );
}
