import React from 'react';
import BpkCard from 'bpk-component-card';
import BpkText from 'bpk-component-text';

import Leg from '../Leg';

import STYLES from './Itinerary.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const formatString = numStr => {
  let num = parseFloat(numStr).toFixed(1);
  return num.toString();
}

const Itinerary = props => {

  return (
    <BpkCard className={getClassName('Itinerary')}>
      <div className={getClassName('Itinerary__top')}>
        {/* Leg 1 */}
        <Leg 
          leg={props.itinerary.legs[0]}
        />

        {/* Leg 2 */}
        <Leg
          leg={props.itinerary.legs[1]}
        />
      </div>
      <div className={getClassName('Itinerary__bottom')}>

        {/* Flight Price */}
        <BpkText 
          tagName="p"
          className={getClassName('Itinerary__price')}
        >
          {props.itinerary.price}
        </BpkText>

        {/* Flight Agent and Rating */}
        <BpkText 
          tagName="p"
          className={getClassName('Itinerary__agent')}
        >
          {props.itinerary.agent}
          <span className={getClassName('Itinerary__agent-rating')}>
            &nbsp;({formatString(props.itinerary.agent_rating)})
          </span>
        </BpkText>
      </div>
    </BpkCard>
  );
}

export default Itinerary;