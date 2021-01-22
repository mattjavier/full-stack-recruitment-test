import React, { useState, useEffect } from 'react';

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
      .then(({ itineraries })=> {
        setFlightsState({ ...flightsState, itineraries });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={getClassName('Container')}>
      {
        flightsState.itineraries.map(itinerary => {
          return (
            <Itinerary 
              key={itinerary.id}
              itinerary={itinerary}
            />
          );
        })
      }
    </div>
  );
}

export default Flights;