import React from 'react';
import BpkText from 'bpk-component-text';

import STYLES from './Time.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Time = props => {

  return (
    <div className={getClassName('Time')}>
      <BpkText className={getClassName('Time__time')}>
        {props.info.time.substr(props.info.time.length - 5)}
      </BpkText>
      <BpkText className={getClassName('Time__airport')}>
        {props.info.airport}
      </BpkText>
    </div>
  )
};

export default Time;