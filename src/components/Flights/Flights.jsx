import React, { useState, useEffect } from 'react';
import BpkMobileScrollContainer from 'bpk-component-mobile-scroll-container';

import Itinerary from '../Itinerary';

import STYLES from './Flights.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Flights = () => {
  const [flightsState, setFlightsState] = useState({
    itineraries: []
  });
  
  useEffect(() => {
    fetch('./flights.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFlightsState({
          ...flightsState,
          itineraries: data.itineraries
        });
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <BpkMobileScrollContainer className={getClassName('Container')}>
      {
        flightsState.itineraries.map(itinerary => {
          return (
            <Itinerary 
              key={itinerary.id}
              itinerary={itinerary}
            />
          )
        })
      }
    </BpkMobileScrollContainer>
  );
}

export default Flights;