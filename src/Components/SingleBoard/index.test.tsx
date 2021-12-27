import React from 'react';
import ReactDOM from 'react-dom';
import SingleBoard from '.';
import ReactTestUtils, { act } from 'react-dom/test-utils';

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

  it.skip('Renders cells correctly', () => {
    const boardCells = container.querySelector('.board-container')!.childNodes;
    expect(boardCells).toHaveLength(10);
    for (let i = 0; i < 10; i++) {
      expect(boardCells[i].childNodes).toHaveLength(10);
    }
  });

  it.skip('Hover displays correct color', () => {
    act(() => {
      ReactTestUtils.Simulate.mouseEnter(
        document.querySelector(`[data-coord='00']`)!
      );
    });
    const targetCell = document.querySelector("[data-coord='00']");
    const firstTargetChild = document.querySelector("[data-coord='01']");
    const secondTargetChild = document.querySelector("[data-coord='02']");
    const thirdTargetChild = document.querySelector("[data-coord='03']");
    const fourthTargetChild = document.querySelector("[data-coord='04]");

    expect(targetCell?.classList.contains('ship-cell')).toBeTruthy();
    expect(firstTargetChild?.classList.contains('ship-cell')).toBeTruthy();
    expect(secondTargetChild?.classList.contains('ship-cell')).toBeTruthy();
    expect(thirdTargetChild?.classList.contains('ship-cell')).toBeTruthy();
    expect(fourthTargetChild?.classList.contains('ship-cell')).toBeFalsy();

    act(() => {
      ReactTestUtils.Simulate.mouseEnter(
        document.querySelector(`[data-coord='08']`)!
      );
    });
    const illegalTargetCell = document.querySelector("[data-coord='08']");
    const illegalChildCell = document.querySelector("[data-coord='09']");
    const uneffectedCell = document.querySelector("[data-coord='07']");
    expect(illegalTargetCell?.classList.contains('occupied-cell')).toBeTruthy();
    expect(illegalChildCell?.classList.contains('occupied-cell')).toBeTruthy();
    expect(uneffectedCell?.classList.contains('ship-cell')).toBeFalsy();
    expect(uneffectedCell?.classList.contains('occupied-cell')).toBeFalsy();
  });

  it.skip('Clicking empty field shows right class and hovering over occupied cell does too', () => {
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
    const targetCell = document.querySelector("[data-coord='00']");
    const firstTargetChild = document.querySelector("[data-coord='01']");
    const secondTargetChild = document.querySelector("[data-coord='02']");
    const thirdTargetChild = document.querySelector("[data-coord='03']");
    const fourthTargetChild = document.querySelector("[data-coord='04']");
    const fithTargetChild = document.querySelector("[data-coord='05']");

    expect(targetCell?.classList.contains('ship-cell')).toBeTruthy();
    expect(firstTargetChild?.classList.contains('ship-cell')).toBeTruthy();
    expect(secondTargetChild?.classList.contains('occupied-cell')).toBeTruthy();
    expect(thirdTargetChild?.classList.contains('occupied-cell')).toBeTruthy();
    expect(fourthTargetChild?.classList.contains('occupied-cell')).toBeTruthy();
    expect(fithTargetChild?.classList.contains('occupied-cell')).toBeFalsy();
    expect(fithTargetChild?.classList.contains('ship-cell')).toBeFalsy();
    expect(fithTargetChild?.classList.contains('undefined')).toBeTruthy();
  });

  it.skip('Check if all ships are placed and no further classes are added', () => {
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
      let dataPoint = document.querySelector(`[data-coord="0${y}"]`);
      expect(dataPoint?.classList.contains('ship-cell')).toBeTruthy();
    }

    for (let x = 1; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        let dataPoint = document.querySelector(`[data-coord="${x}${y}"]`);
        expect(dataPoint?.classList.contains('ship-cell')).toBeFalsy();
        expect(dataPoint?.classList.contains('occupied-cell')).toBeFalsy();
      }
    }
  });
});
