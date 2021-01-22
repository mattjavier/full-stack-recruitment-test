import React from 'react';
import BpkCard from 'bpk-component-card';
import BpkText from 'bpk-component-text';

import Leg from '../Leg';

import STYLES from './Itinerary.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Itinerary = props => {

  return (
    <BpkCard className={getClassName('Itinerary')}>
      <div className={getClassName('Itinerary__top')}>
        <Leg 
          leg={props.itinerary.legs[0]}
          />
        <Leg
          leg={props.itinerary.legs[1]}
        />
      </div>
      <div className={getClassName('Itinerary__bottom')}>
        <div>
          <BpkText 
            tagName="p"
            className={getClassName('Itinerary__price')}
          >
            {props.itinerary.price}
          </BpkText>
          <BpkText 
            tagName="p"
            className={getClassName('Itinerary__agent')}
          >
            {props.itinerary.agent}
          </BpkText>
        </div>
      </div>
    </BpkCard>
  );
}

export default Itinerary;