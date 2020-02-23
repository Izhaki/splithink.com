import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ScrollableFeed from 'react-scrollable-feed';
import FullHeight from './FullHeight';
import FlexSponge from './FlexSponge';
import InBar from './InBar';
import Menu from './Menu';
import { useTour } from './tour';

const useStyles = makeStyles(theme => ({
  bottomUp: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  messages: {
    // ScrollableFeed sets this to 'inherit', which means initial messages
    // on top appear. Setting to 'auto' will position them at the bottom.
    height: 'auto',
    fontSize: 16,
  },
  topPanel: {
    // background: `linear-gradient(#ddd, #ccc) no-repeat center/1px 100%`,
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

export default function App() {
  const classes = useStyles();

  const [messages, setMessages] = React.useState([]);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const { tour, notifyTour } = useTour();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMessage = (text, left) => {
    const message = { text, time: Date.now(), left };
    setMessages([...messages, message]);
    notifyTour('message');
  };

  const handleChar = () => {
    notifyTour('char');
  };

  return (
    <FullHeight className={clsx(classes.root, classes.bottomUp)}>
      <FlexSponge expanded={menuOpen}>
        <Menu />
      </FlexSponge>
      <InBar onChar={handleChar} onMessage={handleMessage} onMenuClick={handleMenuClick} />
      {tour}
      <FlexSponge expanded={!menuOpen} className={clsx(classes.topPanel, classes.bottomUp)}>
        <ScrollableFeed className={classes.messages} forceScroll>
          {messages.map(({ text, time, left }) => (
            <div key={time} className={clsx(classes.message, left ? classes.left : classes.right)}>
              {text}
            </div>
          ))}
        </ScrollableFeed>
      </FlexSponge>
    </FullHeight>
  );
}
