import React from 'react';

function debounce(func, wait = 78) {
  let timeout;
  function debounced(...args) {
    // eslint-disable-next-line consistent-this
    const that = this;
    const later = () => {
      func.apply(that, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

const useFullHeight = () => {
  const [height, setHeight] = React.useState('100vh');

  React.useEffect(() => {
    setHeight(window.innerHeight);

    const handleResize = debounce(() => {
      setHeight(window.innerHeight);
    });

    window.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return height;
};

const FullHeight = ({ children, ...others }) => {
  const height = useFullHeight();
  return (
    <div {...others} style={{ height }}>
      {children}
    </div>
  );
};

export default FullHeight;
