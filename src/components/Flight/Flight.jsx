import React from 'react';
import BpkText from 'bpk-component-text';

//import Departure from '../Departure';
// import Arrival from '../Arrival';

import STYLES from './Flight.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const hours = mins => {
  return Math.floor(mins / 60).toString();
}

const minutes = mins => {
  if (mins % 60 === 0) {
    return '00';
  } else {
    return (mins % 60).toString();
  }
}

const Flight = props => {

  const dep = {
    departure_airport: props.flight.departure_airport,
    departure_time: props.flight.departure_time
  }

  const arr = {
    arrival_airport: props.flight.arrival_airport,
    arrival_time: props.flight.arrival_time
  }

  return (
    <div className={getClassName('Flight')}>
      <div className={getClassName('Flight__left')}>
        <img 
          src={`https://logos.skyscnr.com/images/airlines/favicon/${props.flight.airline_id}.png`} 
          alt="Airline Logo"
          className={getClassName('Flight__airline-logo')}
        />
        {/* <Departure />

        <Arrival /> */}
      </div>
      <div className={getClassName('Flight__right')}>
        <p className={getClassName('Flight__duration-hours')}>
          {`${hours(props.flight.duration_mins)}h ${minutes(props.flight.duration_mins)}`}
        </p>
        {
          props.flight.stops > 0 ? (
            <p className={getClassName('Flight__red')}>
              {props.flight.stops} {
                props.flight.stops > 1 ? ('Stops') : ('Stop')
              }
            </p>
          ) : (
            <p className={getClassName('Flight__green')}>
              Direct
            </p>
          )
        }
      </div>
    </div>
  );
}

export default Flight;