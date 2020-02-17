import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollableFeed from 'react-scrollable-feed';
import FullHeight from './FullHeight';
import Input from './Input';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column-reverse',
    fontFamily: theme.typography.fontFamily,
    background: `linear-gradient(#ddd, #ccc) no-repeat center/1px 100%`,
  },
  textWrap: {
    display: 'flex',
  },
  messages: {
    // ScrollableFeed sets this to 'inherit', which means initial messages
    // on top appear. Setting to 'auto' will position them at the bottom.
    height: 'auto',
    fontSize: 16,
  },
  left: {
    marginRight: '50%',
    overflowWrap: 'break-word',
    paddingRight: 24,
    textAlign: 'right',
  },
  right: {
    marginLeft: '50%',
    maxWidth: '50%',
    paddingLeft: 24,
    overflowWrap: 'break-word',
    textAlign: 'left',
  },
}));

export default function App() {
  const classes = useStyles();

  const [messages, setMessages] = React.useState([]);
  const leftRef = React.useRef();
  const rightRef = React.useRef();
  const [placeHolder, setPlaceHolder] = React.useState('you');

  const onTextEntered = () => {
    setPlaceHolder(undefined);
  };

  const handleMessage = left => text => {
    if (text.length) {
      const message = { text, time: Date.now(), left };
      setMessages([...messages, message]);
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
    <FullHeight className={classes.root}>
      <div className={classes.textWrap}>
        <Input
          left
          ref={leftRef}
          placeholder={placeHolder}
          onChange={onTextEntered}
          onFlush={handleMessage(true)}
        />
        <Input
          ref={rightRef}
          placeholder={placeHolder}
          onChange={onTextEntered}
          onFlush={handleMessage(false)}
        />
      </div>
      <ScrollableFeed className={classes.messages} forceScroll>
        {messages.map(({ text, time, left }) => (
          <div key={time} className={left ? classes.left : classes.right}>
            {text}
          </div>
        ))}
      </ScrollableFeed>
    </FullHeight>
  );
}
