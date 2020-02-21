import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  inBar: {
    display: 'flex',
    padding: 6,
    // background: `linear-gradient(#ddd, #ccc) no-repeat center/1px 100%`,
  },
  menuButton: {
    backgroundColor: '#f1f3f4',
    margin: [[0, 6]],
    padding: [[0, 6]],
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
});

export default function InBar({ onMessage, onMenuClick, onChar }) {
  const classes = useStyles();

  const leftRef = React.useRef();
  const rightRef = React.useRef();

  const handleMessage = left => text => {
    if (text.length) {
      onMessage(text, left);
    }
    if (left) {
      rightRef.current.focus();
    } else {
      leftRef.current.focus();
    }
  };

  React.useEffect(() => {
    leftRef.current.focus();
  }, []);

  return (
    <div className={classes.inBar}>
      <Input left ref={leftRef} onChange={onChar} onFlush={handleMessage(true)} />

      <IconButton className={classes.menuButton} onClick={onMenuClick} aria-label="menu">
        <MenuIcon fontSize="small" />
      </IconButton>

      <Input ref={rightRef} onChange={onChar} onFlush={handleMessage(false)} />
    </div>
  );
}
