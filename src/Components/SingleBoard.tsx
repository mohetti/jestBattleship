import React, { useState, useRef } from 'react';
import uniqid from 'uniqid';
import '../styles/single-board.css';

function SingleBoard() {
  const [ship, setShip] = useState(4);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [isHoverable, setIsHoverable] = useState(true);
  const [occupiedCells, setOccupiedCells] = useState<string[]>([]);
  const [hoveredCells, setHoveredCells] = useState<string[]>([]);
  const [placedShips, setPlacedShips] = useState({
    bigShip: [],
    medShip: [],
    smallShip: [],
    tinyShip: [],
  });

  const highlightCells = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const dataCoord = target.getAttribute('data-coord');
    const hoveredCellsArray = [];

    if (isHorizontal) {
      if (Number(dataCoord![1]) + ship - 1 > 9) {
        for (let i = 0; i < 10 - Number(dataCoord![1]); i++) {
          hoveredCellsArray.push(
            `${dataCoord![0]}${Number(dataCoord![1]) + i}`
          );
        }
        setHoveredCells(hoveredCellsArray);
        setIsHoverable(false);
        return;
      }

      for (let i = 0; i < ship; i++) {
        if (
          occupiedCells.indexOf(
            `${dataCoord![0]}${Number(dataCoord![1]) + i}`
          ) !== -1
        )
          return; // hghl red
      }

      for (let i = 0; i < ship; i++) {
        hoveredCellsArray.push(`${dataCoord![0]}${Number(dataCoord![1]) + i}`);
      }
      setHoveredCells(hoveredCellsArray);
      setIsHoverable(true);
      return;
    }
  };

  const renderHover = (xCoord: number, yCoord: number) => {
    const isHovered = hoveredCells.indexOf(`${xCoord}${yCoord}`) !== -1;
    if (isHorizontal) {
      return isHovered && isHoverable
        ? 'ship-cell'
        : isHovered && !isHoverable
        ? 'occupied-cell'
        : undefined;
    }
  };

  const renderCells = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <div className='fill-space flex-row' key={uniqid()}>
          <div
            data-coord={`${i}0`}
            className={`fill-space border ${renderHover(i, 0)}`}
          ></div>
          <div
            data-coord={`${i}1`}
            className={`fill-space border ${renderHover(i, 1)}`}
          ></div>
          <div
            data-coord={`${i}2`}
            className={`fill-space border ${renderHover(i, 2)}`}
          ></div>
          <div
            data-coord={`${i}3`}
            className={`fill-space border ${renderHover(i, 3)}`}
          ></div>
          <div
            data-coord={`${i}4`}
            className={`fill-space border ${renderHover(i, 4)}`}
          ></div>
          <div
            data-coord={`${i}5`}
            className={`fill-space border ${renderHover(i, 5)}`}
          ></div>
          <div
            data-coord={`${i}6`}
            className={`fill-space border ${renderHover(i, 6)}`}
          ></div>
          <div
            data-coord={`${i}7`}
            className={`fill-space border ${renderHover(i, 7)}`}
          ></div>
          <div
            data-coord={`${i}8`}
            className={`fill-space border ${renderHover(i, 8)}`}
          ></div>
          <div
            data-coord={`${i}9`}
            className={`fill-space border ${renderHover(i, 9)}`}
          ></div>
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
