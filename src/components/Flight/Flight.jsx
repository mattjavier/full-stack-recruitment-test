import React from 'react';
import BpkText from 'bpk-component-text';
import BpkSmallFlightIcon from 'bpk-component-icon/sm/flight';

import Time from '../Time';

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

  return (
    <div className={getClassName('Flight')}>
      <div className={getClassName('Flight__left')}>
        {/* Airline Logo */}
        <img 
          src={`https://logos.skyscnr.com/images/airlines/favicon/${props.flight.airline_id}.png`} 
          alt="Airline Logo"
          className={getClassName('Flight__airline-logo')}
        />
        
        {/* Departure */}
        <Time 
          info={{ 
            airport: props.flight.departure_airport, 
            time: props.flight.departure_time
          }}
        />

        {/* Flight Icon  */}
        <div className={getClassName('Flight__icon')}>
          <BpkSmallFlightIcon className="abc-icon__flight"/>
        </div>

        {/* Arrival */}
        <Time 
          info={{ 
            airport: props.flight.arrival_airport, 
            time: props.flight.arrival_time
          }}
        />
      </div>
      <div className={getClassName('Flight__right')}>
        {/* Flight Duration */}
        <p className={getClassName('Flight__duration-hours')}>
          {`${hours(props.flight.duration_mins)}h ${minutes(props.flight.duration_mins)}`}
        </p>
        
        {/* Potential Stops */}
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