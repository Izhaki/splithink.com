import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import FullHeight from './layout/FullHeight';
import FlexSponge from './layout/FlexSponge';
import InputBar from './chat/InputBar';
import Messages from './chat/Messages';
import Menu from './menu/Menu';
import { useTour } from './tour';

const useStyles = makeStyles({
  bottomUp: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  // topPanel: {
  //   background: `linear-gradient(#ddd, #ccc) no-repeat center/1px 100%`,
  // },
});

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
      <InputBar
        menuOpen={menuOpen}
        onChar={handleChar}
        onMessage={handleMessage}
        onMenuClick={handleMenuClick}
      />
      {tour}
      <FlexSponge expanded={!menuOpen} className={clsx(classes.topPanel, classes.bottomUp)}>
        <Messages messages={messages} />
      </FlexSponge>
    </FullHeight>
  );
}
