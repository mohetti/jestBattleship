import React, { useState } from 'react';
import Axis from './Axis';
import '../styles/single-board.css';

function Harbor() {
  const [isHorizontal, setIsHorizontal] = useState(true);
  function toggleAxis() {
    setIsHorizontal(!isHorizontal);
  }
  return (
    <div className='fill-space hghl-yellow'>
      <Axis isHorizontal={isHorizontal} toggleAxis={toggleAxis} />
      <div className='ship' data-test='big-ship'></div>
      <div className='ship' data-test='med-ship'></div>
      <div className='ship' data-test='small-ship'></div>
      <div className='ship' data-test='tiny-ship'></div>
    </div>
  );
}

export default Harbor;
//  className='split right'
