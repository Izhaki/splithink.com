import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column-reverse',
    fontFamily: theme.typography.fontFamily,
    background: `linear-gradient(#ddd, #ccc) no-repeat center/1px 100%`,
  },
  textWrap: {
    display: 'flex',
  },
  messages: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: 10,
    paddingBottom: 0,
    fontSize: 16,
    pointerEvents: 'none',
  },
  left: {
    marginRight: '50%',
    overflowWrap: 'break-word',
    paddingRight: 10,
    textAlign: 'right',
  },
  right: {
    marginLeft: '50%',
    maxWidth: '50%',
    paddingLeft: 10,
    overflowWrap: 'break-word',
    textAlign: 'left',
  },
}));

export default function App() {
  const classes = useStyles();

  const [messages, setMessages] = React.useState([]);
  const leftRef = React.useRef();
  const rightRef = React.useRef();

  const onMessage = left => text => {
    if (text.length) {
      setMessages([{ text, time: Date.now(), left }, ...messages]);
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
    <div className={classes.root}>
      <div className={classes.textWrap}>
        <Input ref={leftRef} left onFlush={onMessage(true)} />
        <Input ref={rightRef} onFlush={onMessage(false)} />
      </div>
      <div className={classes.messages}>
        {messages.map(({ text, time, left }) => (
          <div key={time} className={left ? classes.left : classes.right}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
