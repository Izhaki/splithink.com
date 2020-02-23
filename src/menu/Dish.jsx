import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    border: 'none',
    marginBottom: theme.spacing(1),
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
  sides: {
    marginTop: theme.spacing(3),
    alignItems: 'center',
  },
  side: {
    fontFamily: theme.typography.message.fontFamily,
    padding: [[0, theme.spacing(1)]],
  },
  left: {
    textAlign: 'right',
  },
  comment: {
    marginTop: theme.spacing(1),
  },
}));

export default function Dish({ title, blurb, description, left, right, comment, loner }) {
  const classes = useStyles();

  const Title = ({ children }) => (
    <Typography variant="h5" component="h3" align="center">
      {children}
    </Typography>
  );

  const Blurb = ({ children }) => (
    <Typography className={classes.blurb} color="textSecondary" align="center">
      {children}
    </Typography>
  );

  const Description = ({ children }) => (
    <Typography variant="body2" component="p" align="center">
      {children}
    </Typography>
  );

  const Side = ({ children, leftSide }) => (
    <Typography variant="subtitle1" className={clsx(classes.side, leftSide && classes.left)}>
      {children}
    </Typography>
  );

  const Comment = ({ children }) => (
    <Typography variant="body2" component="p" align="center" className={classes.comment}>
      {children}
    </Typography>
  );

  return (
    <Grid item xs={12} sm={loner ? undefined : 6}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Title>{title}</Title>
          <Blurb>{blurb}</Blurb>
          {description && <Description>{description}</Description>}
          {left && (
            <Box className={classes.sides} display="flex" justifyContent="center">
              <Side leftSide>{left}</Side>
              <Divider orientation="vertical" flexItem />
              <Side>{right}</Side>
            </Box>
          )}
          {comment && <Comment>{comment}</Comment>}
        </CardContent>
      </Card>
    </Grid>
  );
}
