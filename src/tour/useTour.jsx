import React from 'react';
import cookies from 'js-cookie';
import Tour from './Tour';

const tourCompeleted = Boolean(cookies.get('tourCompeleted'));
const initialTourStep = tourCompeleted ? Infinity : 0;

export default function useTour() {
  const [tourStep, setTourStep] = React.useState(initialTourStep);

  const bumpTourStep = () => {
    if (tourStep === 4) {
      cookies.set('tourCompeleted', true);
    }
    setTourStep(tourStep + 1);
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
      default: {
        throw new Error(`Unknow evetyType: ${eventType}`);
      }
    }
  };

  return { bumpTourStep, notifyTour, tour: tourCompeleted ? null : <Tour step={tourStep} /> };
}
