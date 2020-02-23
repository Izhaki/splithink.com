import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: 0,
    fontSize: 16,
    fontFamily: theme.typography.message.fontFamily,
  },
  input: {
    padding: [[8, 18, 4]],
    borderRadius: 24,
    backgroundColor: '#f1f3f4',
    lineHeight: 'normal',
  },
  left: {
    textAlign: 'right',
  },
  right: {
    textAlign: 'left',
  },
}));

const Input = React.forwardRef(({ left = false, onChange, onFlush }, ref) => {
  const classes = useStyles();

  const [text, setText] = React.useState('');

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      onFlush(event.target.value);
      setText('');
    }
  };

  const handleChange = event => {
    setText(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <InputBase
      inputRef={ref}
      inputProps={{ 'aria-label': left ? 'left' : 'right' }}
      classes={{
        root: classes.root,
        input: clsx(classes.input, left ? classes.left : classes.right),
      }}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      value={text}
    />
  );
});

export default Input;
