import React from 'react';
import ReactDOM from 'react-dom';
import SingleBoard from '.';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import {
  nodeAttributeArray,
  hasShipCellEffect,
  hasOccupiedEffect,
} from './testhelpers';

describe('SingleBoard Component tests', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<SingleBoard isHorizontal={true} />, container);
    });
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Renders cells correctly', () => {
    const boardCells = container.querySelector('.board-container')!.childNodes;
    expect(boardCells).toHaveLength(10);
    for (let i = 0; i < 10; i++) {
      expect(boardCells[i].childNodes).toHaveLength(10);
    }
  });

  it('Hover displays correct color', () => {
    act(() => {
      ReactTestUtils.Simulate.mouseEnter(
        document.querySelector(`[data-coord='00']`)!
      );
    });
    const targetCell = nodeAttributeArray('00');
    const firstTargetChild = nodeAttributeArray('01');
    const secondTargetChild = nodeAttributeArray('02');
    const thirdTargetChild = nodeAttributeArray('03');
    const fourthTargetChild = nodeAttributeArray('04');

    expect(targetCell.some(hasShipCellEffect)).toBeTruthy();
    expect(firstTargetChild.some(hasShipCellEffect)).toBeTruthy();
    expect(secondTargetChild.some(hasShipCellEffect)).toBeTruthy();
    expect(thirdTargetChild.some(hasShipCellEffect)).toBeTruthy();
    expect(fourthTargetChild.some(hasShipCellEffect)).toBeFalsy();
    expect(fourthTargetChild.some(hasOccupiedEffect)).toBeFalsy();

    act(() => {
      ReactTestUtils.Simulate.mouseEnter(
        document.querySelector(`[data-coord='08']`)!
      );
    });
    const illegalTargetCell = nodeAttributeArray('08');
    const illegalChildCell = nodeAttributeArray('09');
    const uneffectedCell = nodeAttributeArray('07');
    expect(illegalTargetCell.some(hasOccupiedEffect)).toBeTruthy();
    expect(illegalChildCell.some(hasOccupiedEffect)).toBeTruthy();
    expect(uneffectedCell.some(hasOccupiedEffect)).toBeFalsy();
    expect(uneffectedCell.some(hasShipCellEffect)).toBeFalsy();
  });

  it('Clicking empty field shows right class and hovering over occupied cell does too', () => {
    act(() => {
      ReactTestUtils.Simulate.click(
        document.querySelector("[data-coord='00']")!
      );
    });
    act(() => {
      ReactTestUtils.Simulate.mouseEnter(
        document.querySelector("[data-coord='02']")!
      );
    });
    const targetCell = nodeAttributeArray('00');
    const firstTargetChild = nodeAttributeArray('01');
    const secondTargetChild = nodeAttributeArray('02');
    const thirdTargetChild = nodeAttributeArray('03');
    const fourthTargetChild = nodeAttributeArray('04');
    const fithTargetChild = nodeAttributeArray('05');

    expect(targetCell.some(hasShipCellEffect)).toBeTruthy();
    expect(firstTargetChild.some(hasShipCellEffect)).toBeTruthy();
    expect(secondTargetChild.some(hasOccupiedEffect)).toBeTruthy();
    expect(thirdTargetChild.some(hasOccupiedEffect)).toBeTruthy();
    expect(fourthTargetChild.some(hasOccupiedEffect)).toBeTruthy();
    expect(fithTargetChild.some(hasOccupiedEffect)).toBeFalsy();
    expect(fithTargetChild.some(hasShipCellEffect)).toBeFalsy();
  });

  it('Check if all ships are placed and no further classes are added', () => {
    act(() => {
      ReactTestUtils.Simulate.click(
        document.querySelector("[data-coord='00']")!
      );
    });
    act(() => {
      ReactTestUtils.Simulate.click(
        document.querySelector("[data-coord='04']")!
      );
    });
    act(() => {
      ReactTestUtils.Simulate.click(
        document.querySelector("[data-coord='07']")!
      );
    });
    act(() => {
      ReactTestUtils.Simulate.click(
        document.querySelector("[data-coord='09']")!
      );
    });

    for (let y = 0; y < 10; y++) {
      let dataPoint = nodeAttributeArray(`0${y}`);
      expect(dataPoint?.some(hasShipCellEffect)).toBeTruthy();
    }

    for (let x = 1; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        let dataPoint = nodeAttributeArray(`${x}${y}`);
        expect(dataPoint.some(hasShipCellEffect)).toBeFalsy();
        expect(dataPoint.some(hasOccupiedEffect)).toBeFalsy();
      }
    }
  });
});
