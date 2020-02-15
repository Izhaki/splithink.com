import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: 10,
    paddingTop: 0,
    fontSize: 16,
    fontFamily: theme.typography.fontFamily,
  },
  left: {
    textAlign: 'right',
    paddingTop: 0,
  },
  right: {
    textAlign: 'left',
    paddingTop: 0,
  },
}));

const Input = React.forwardRef(({ left = false, onFlush }, ref) => {
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
  };

  return (
    <InputBase
      inputRef={ref}
      inputProps={{ 'aria-label': left ? 'left' : 'right' }}
      classes={{
        root: classes.root,
        input: left ? classes.left : classes.right,
      }}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      value={text}
    />
  );
});

export default Input;
