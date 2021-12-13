import React from 'react';
import uniqid from 'uniqid';

function SingleBoard() {
  function renderCells() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(<div key={uniqid()}>1</div>);
    }
    return arr.map((x) => x);
  }
  return <div className='single-board'>{renderCells()}</div>;
}

export default SingleBoard;
