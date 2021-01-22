import React from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';
import Flights from '../Flights';

import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';


const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      {/* <BpkText tagName="p">Over to you...</BpkText> */}
      {/* TODO: Add a component to display results here */}
      {/* List of Flights */}
      <Flights />
      {/* each Card will be an itinerary  */}
      {/* each itinerary will have a 2 Legs */}
      {/* each Leg is a Flight */}
    </main>
  </div>
);

export default App;
