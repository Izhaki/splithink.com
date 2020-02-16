import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: 0,
    fontSize: 16,
    fontFamily: theme.typography.fontFamily,
  },
  input: {
    padding: [[6, 18]],
    margin: 6,
    borderRadius: 18,
    backgroundColor: '#f1f3f4',
  },
  left: {
    textAlign: 'right',
  },
  right: {
    textAlign: 'left',
  },
}));

const Input = React.forwardRef(({ left = false, onChange, onFlush, placeholder }, ref) => {
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
      placeholder={placeholder}
    />
  );
});

export default Input;
