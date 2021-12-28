import React from 'react';
import uniqid from 'uniqid';

type Props = {
  placeShip: (e: React.MouseEvent) => void;
  highlightCells: (e: React.MouseEvent) => void;
  renderHover: (x: number, y: number) => string | undefined;
};

function BoardCells(props: Props) {
  const { placeShip, highlightCells, renderHover } = props;
  const renderCells = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <div onClick={placeShip} className='fill-space flex-row' key={uniqid()}>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}0`}
            data-test-css={renderHover(i, 0)}
            className={`fill-space border ${renderHover(i, 0)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}1`}
            data-test-css={renderHover(i, 1)}
            className={`fill-space border ${renderHover(i, 1)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}2`}
            data-test-css={renderHover(i, 2)}
            className={`fill-space border ${renderHover(i, 2)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}3`}
            data-test-css={renderHover(i, 3)}
            className={`fill-space border ${renderHover(i, 3)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}4`}
            data-test-css={renderHover(i, 4)}
            className={`fill-space border ${renderHover(i, 4)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}5`}
            data-test-css={renderHover(i, 5)}
            className={`fill-space border ${renderHover(i, 5)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}6`}
            data-test-css={renderHover(i, 6)}
            className={`fill-space border ${renderHover(i, 6)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}7`}
            data-test-css={renderHover(i, 7)}
            className={`fill-space border ${renderHover(i, 7)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}8`}
            data-test-css={renderHover(i, 8)}
            className={`fill-space border ${renderHover(i, 8)}`}
          ></div>
          <div
            onMouseEnter={highlightCells}
            data-coord={`${i}9`}
            data-test-css={renderHover(i, 9)}
            className={`fill-space border ${renderHover(i, 9)}`}
          ></div>
        </div>
      );
    }
    return arr.map((x) => x);
  };
  return <React.Fragment>{renderCells()}</React.Fragment>;
}

export default BoardCells;
