import React, { useState } from 'react';
import '../styles/harbor.css';
import Axis from './Axis';

function Harbor() {
  const [isHorizontal, setIsHorizontal] = useState(true);
  function toggleAxis() {
    setIsHorizontal(!isHorizontal);
  }
  return (
    <div>
      <div className='ship' data-test='big-ship'></div>
      <div className='ship' data-test='med-ship'></div>
      <div className='ship' data-test='small-ship'></div>
      <div className='ship' data-test='tiny-ship'></div>
    </div>
  );
}

export default Harbor;
