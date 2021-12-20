import React, { useState } from 'react';
import Axis from './Axis';
import '../styles/harbor.css';

type Props = {
  isHorizontal: boolean;
  toggleAxis: () => void;
};

function Harbor(props: Props) {
  return (
    <div className='fill-space hghl-yellow'>
      <div className='flex-row display-right mgt mgr'>
        <Axis isHorizontal={props.isHorizontal} toggleAxis={props.toggleAxis} />
      </div>
      <div className='flex-column mgt mgl'>
        <div className='ship flex-row' data-test='big-ship'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='ship flex-row' data-test='med-ship'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='ship flex-row' data-test='small-ship'>
          <div></div>
          <div></div>
        </div>
        <div className='ship flex-row' data-test='tiny-ship'>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Harbor;
