import React, { useState } from 'react';
import uniqid from 'uniqid';
import '../styles/single-board.css';

type Props = {
  isHorizontal: boolean;
};

type T = {
  bigShip: number[][];
  medShip: number[][];
  smallShip: number[][];
  tinyShip: number[][];
};

enum ShipEnum {
  tinyShip = 1,
  smallShip,
  medShip,
  bigShip,
}

function SingleBoard(props: Props) {
  const [ship, setShip] = useState(4);
  const [isHoverable, setIsHoverable] = useState(true);
  const [occupiedCells, setOccupiedCells] = useState<string[]>([]);
  const [hoveredCells, setHoveredCells] = useState<string[]>([]);
  const [placedShips, setPlacedShips] = useState<T>({
    bigShip: [],
    medShip: [],
    smallShip: [],
    tinyShip: [],
  });

  const highlightCells = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const dataCoord = target.getAttribute('data-coord');
    let [x, y] = [...String(target.getAttribute('data-coord'))];
    const hoveredCellsArray = [];
    let isOccupied = false;

    if (props.isHorizontal) {
      if (Number(y) + ship - 1 > 9) {
        for (let i = 0; i < 10 - Number(y); i++) {
          hoveredCellsArray.push(`${x}${Number(y) + i}`);
        }
        setIsHoverable(false);
        setHoveredCells(hoveredCellsArray);
        return;
      }

      for (let i = 0; i < ship; i++) {
        hoveredCellsArray.push(`${x}${Number(y) + i}`);
        if (occupiedCells.indexOf(`${x}${Number(y) + i}`) !== -1) {
          isOccupied = true;
        }
      }
      setHoveredCells(hoveredCellsArray);
      isOccupied ? setIsHoverable(false) : setIsHoverable(true);
      return;
    }

    if (Number(x) + ship - 1 > 9) {
      for (let i = 0; i < 10 - Number(x); i++) {
        hoveredCellsArray.push(`${Number(x) + i}${y}`);
      }
      setIsHoverable(false);
      setHoveredCells(hoveredCellsArray);
      return;
    }

    for (let i = 0; i < ship; i++) {
      hoveredCellsArray.push(`${Number(x) + i}${y}`);
      if (occupiedCells.indexOf(`${Number(x) + i}${y}`) !== -1) {
        isOccupied = true;
      }
    }
    setHoveredCells(hoveredCellsArray);
    isOccupied ? setIsHoverable(false) : setIsHoverable(true);
    return;
  };

  const renderHover = (xCoord: number, yCoord: number) => {
    const isHovered = hoveredCells.indexOf(`${xCoord}${yCoord}`) !== -1;
    const isOccupied = occupiedCells.indexOf(`${xCoord}${yCoord}`) !== -1;

    return isHovered && isOccupied
      ? 'occupied-cell'
      : isOccupied
      ? 'ship-cell'
      : isHovered && isHoverable
      ? 'ship-cell'
      : isHovered && !isHoverable
      ? 'occupied-cell'
      : undefined;
  };

  const placeShip = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const dataCoord = target.getAttribute('data-coord');
    if (dataCoord === null) return;
    if (!isHoverable) return;
    if (!ship) return;

    let newShipCoords: number[][] = [];
    let occupiedArr: string[] = [];
    if (props.isHorizontal) {
      for (let i = 0; i < ship; i++) {
        let x = Number(dataCoord![0]);
        let y = Number(dataCoord![1]) + i;
        occupiedArr.push(`${x}${y}`);
        newShipCoords.push([x, y]);
      }
    }
    if (!props.isHorizontal) {
      for (let i = 0; i < ship; i++) {
        let x = Number(dataCoord![0]) + i;
        let y = Number(dataCoord![1]);
        occupiedArr.push(`${x}${y}`);
        newShipCoords.push([x, y]);
      }
    }

    setOccupiedCells((prevState) => {
      return [...prevState, ...occupiedArr];
    });

    setPlacedShips((prevState) => {
      return { ...prevState, [ShipEnum[ship]]: newShipCoords };
    });
    setShip((prevState) => prevState - 1);
  };

  const renderCells = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <div onClick={placeShip} className='fill-space flex-row' key={uniqid()}>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}0`}
            className={`fill-space border ${renderHover(i, 0)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}1`}
            className={`fill-space border ${renderHover(i, 1)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}2`}
            className={`fill-space border ${renderHover(i, 2)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}3`}
            className={`fill-space border ${renderHover(i, 3)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}4`}
            className={`fill-space border ${renderHover(i, 4)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}5`}
            className={`fill-space border ${renderHover(i, 5)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}6`}
            className={`fill-space border ${renderHover(i, 6)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}7`}
            className={`fill-space border ${renderHover(i, 7)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}8`}
            className={`fill-space border ${renderHover(i, 8)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
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
      <div className='board-container '>{renderCells()}</div>
    </div>
  );
}

export default SingleBoard;
