import React from 'react';

export default function FlexSponge({ expanded, children, ...other }) {
  const style = React.useMemo(
    () => ({ flex: expanded ? 1 : 0, transition: 'flex 0.5s', overflowY: 'auto' }),
    [expanded],
  );

  return (
    <div style={style} {...other}>
      {children}
    </div>
  );
}
