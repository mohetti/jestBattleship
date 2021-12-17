import React, { useState, useRef } from 'react';
import uniqid from 'uniqid';
import '../styles/single-board.css';

function SingleBoard() {
  const [ship, setShip] = useState(4);
  const box = useRef<HTMLDivElement>(null);
  const box2 = useRef<HTMLDivElement>(null);

  const highlightCells = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const dataCoord = target.getAttribute('data-coord');
    target.style.background = 'yellow';

    let test = target.nextSibling as HTMLDivElement;
    test.style.background = 'yellow';
  };
  const renderCells = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <div className='fill-space flex-row' key={uniqid()}>
          <div data-coord={`${i}0`} className='fill-space border'></div>
          <div data-coord={`${i}1`} className='fill-space border'></div>
          <div data-coord={`${i}2`} className='fill-space border'></div>
          <div data-coord={`${i}3`} className='fill-space border'></div>
          <div data-coord={`${i}4`} className='fill-space border'></div>
          <div data-coord={`${i}5`} className='fill-space border'></div>
          <div data-coord={`${i}6`} className='fill-space border'></div>
          <div data-coord={`${i}7`} className='fill-space border'></div>
          <div data-coord={`${i}8`} className='fill-space border'></div>
          <div data-coord={`${i}9`} className='fill-space border'></div>
        </div>
      );
    }
    return arr.map((x) => x);
  };
  return (
    <div className='fill-space flex-row center hghl-red'>
      <div className='board-container ' onMouseOver={highlightCells}>
        {renderCells()}
      </div>
    </div>
  );
}

export default SingleBoard;
