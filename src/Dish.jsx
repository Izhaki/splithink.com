import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: 'none',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  blurb: {
    marginBottom: 12,
    textTransform: 'lowercase',
  },
});

export default function Dish({ title, blurb, description }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.blurb} color="textSecondary">
            {blurb}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
