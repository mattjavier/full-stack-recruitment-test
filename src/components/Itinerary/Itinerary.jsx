import React from 'react';
import BpkCard from 'bpk-component-card';
import BpkText from 'bpk-component-text';

import Leg from '../Leg';

const Itinerary = (itinerary) => (
  <BpkCard>
    <BpkText tagName="p">itinerary.agent</BpkText>
  </BpkCard>
);

export default Itinerary;