import React from 'react';
import BpkText from 'bpk-component-text';

const Leg = (leg) => (
  <BpkText tagName="p">
    {leg.id}
  </BpkText>
);

export default Leg;