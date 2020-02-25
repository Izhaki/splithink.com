import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(theme => ({
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
    '&:hover $menuIcon': {
      opacity: 1,
    },
  },
  menuIcon: {
    opacity: 0,
    transform: `rotate(0deg)`,
    transition: theme.transitions.create(['background-color', 'transform', 'opacity'], {
      duration: 2000,
    }),
  },
  menuOpen: {
    transform: `rotate(180deg)`,
    opacity: 1,
  },
  '@keyframes blink': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  lastTourStep: {
    animationName: '$blink',
    animationIterationCount: 'infinite',
    animationDuration: 1600,
    animationDirection: 'alternate',
    animationTimingFunction: 'linear',
  },
}));

export default function InBar({ menuOpen, isMenuTourStep, onMessage, onMenuClick, onChar }) {
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
        <ExpandLessIcon
          fontSize="small"
          className={clsx(
            classes.menuIcon,
            menuOpen && classes.menuOpen,
            isMenuTourStep && classes.lastTourStep,
          )}
        />
      </IconButton>

      <Input ref={rightRef} onChange={onChar} onFlush={handleMessage(false)} />
    </div>
  );
}
