import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ScrollableFeed from 'react-scrollable-feed';

const useStyles = makeStyles(theme => ({
  messages: {
    // ScrollableFeed sets this to 'inherit', which means initial messages
    // on top appear. Setting to 'auto' will position them at the bottom.
    height: 'auto',
    fontSize: 16,
  },
  message: {
    fontFamily: theme.typography.message.fontFamily,
    overflowWrap: 'break-word',
  },
  left: {
    marginRight: '50%',
    paddingRight: 24,
    textAlign: 'right',
  },
  right: {
    marginLeft: '50%',
    maxWidth: '50%',
    paddingLeft: 24,
    textAlign: 'left',
  },
}));

const Input = ({ messages }) => {
  const classes = useStyles();

  return (
    <ScrollableFeed className={classes.messages} forceScroll>
      {messages.map(({ text, time, left }) => (
        <div key={time} className={clsx(classes.message, left ? classes.left : classes.right)}>
          {text}
        </div>
      ))}
    </ScrollableFeed>
  );
};

export default Input;
