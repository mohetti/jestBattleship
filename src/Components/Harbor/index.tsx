import React from 'react';
import Axis from './Axis';
import './harbor.css';

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
    </div>
  );
}

export default Harbor;
