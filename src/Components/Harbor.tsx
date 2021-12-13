import React from 'react';

function Harbor() {
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
