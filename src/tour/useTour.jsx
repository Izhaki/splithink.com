import React from 'react';
import cookies from 'js-cookie';
import Tour from './Tour';

const COMPLETED = Infinity;

export default function useTour() {
  const [tourStep, setTourStep] = React.useState(COMPLETED);

  React.useEffect(() => {
    const tourCompeleted = Boolean(cookies.get('tourCompeleted'));
    if (!tourCompeleted) {
      setTourStep(0);
    }
  }, []);

  const bumpTourStep = () => {
    if (tourStep === 4) {
      cookies.set('tourCompeleted', true);
      setTourStep(COMPLETED);
    } else {
      setTourStep(tourStep + 1);
    }
  };

  const notifyTour = eventType => {
    switch (eventType) {
      case 'char': {
        if ([0, 2, 4].includes(tourStep)) {
          bumpTourStep();
        }
        break;
      }
      case 'message': {
        bumpTourStep();
        break;
      }
      case 'menuOpened': {
        if (tourStep === 4) {
          bumpTourStep();
        }
        break;
      }
      default: {
        throw new Error(`Unknow evetyType: ${eventType}`);
      }
    }
  };

  return {
    tourStep,
    notifyTour,
    tour: tourStep !== COMPLETED ? <Tour step={tourStep} /> : null,
  };
}
