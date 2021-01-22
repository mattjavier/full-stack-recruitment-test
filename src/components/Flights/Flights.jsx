import React, { useState, useEffect } from 'react';
import BpkMobileScrollContainer from 'bpk-component-mobile-scroll-container';

import Itinerary from '../Itinerary';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Flights = () => {
  const [flightsState, setFlightsState] = useState({
    itineraries: [],
    legs: []
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
          itineraries: data.itineraries,
          legs: data.legs
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
            />
          )
        })
      }
    </BpkMobileScrollContainer>
  );
}

export default Flights;