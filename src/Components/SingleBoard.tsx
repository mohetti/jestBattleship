import React from 'react';
import uniqid from 'uniqid';

function SingleBoard() {
  function renderCells() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <div className=' fill-space flex-row' key={uniqid()}>
          <div className='fill-space border'></div>
          <div className='fill-space border'></div>
          <div className='fill-space border'> </div>
          <div className='fill-space border'></div>
          <div className='fill-space border'></div>
          <div className='fill-space border'></div>
          <div className='fill-space border'></div>
          <div className='fill-space border'></div>
          <div className='fill-space border'></div>
          <div className='fill-space border'></div>
        </div>
      );
    }
    return arr.map((x) => x);
  }
  return (
    <div className='fill-space  hghl-red'>
      <div className='board-container'>{renderCells()}</div>
    </div>
  );
}

export default SingleBoard;
// className='split left'
