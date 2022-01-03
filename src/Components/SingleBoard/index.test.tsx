import {
  setup,
  hasShipCellEffect,
  hasOccupiedEffect,
  attrOfSpecificCell,
} from './util/testhelpers';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

it.skip('Renders cells correctly', () => {
  setup(true);
  const rowContainers = screen.getAllByTestId('row-container');
  expect(rowContainers).toHaveLength(10);
  for (let i = 0; i < 10; i++) {
    expect(rowContainers[i].childNodes).toHaveLength(10);
  }
});

it.skip('Hover displays ship-cell effect correctly', () => {
  const { initHover } = setup(true);
  initHover('00');
  expect(attrOfSpecificCell('00').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('01').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('02').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('03').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('04').some(hasOccupiedEffect)).toBeFalsy();
  expect(attrOfSpecificCell('05').some(hasShipCellEffect)).toBeFalsy();
});

it.skip('Hover displays occupied effect correctly', () => {
  const { initHover } = setup(true);
  initHover('08');
  expect(attrOfSpecificCell('07').some(hasShipCellEffect)).toBeFalsy();
  expect(attrOfSpecificCell('07').some(hasOccupiedEffect)).toBeFalsy();
  expect(attrOfSpecificCell('08').some(hasOccupiedEffect)).toBeTruthy();
  expect(attrOfSpecificCell('09').some(hasOccupiedEffect)).toBeTruthy();
});

it.skip('Clicking empty field shows right class and hovering over occupied cell does too', async () => {
  const { initHover, initClick } = setup(true);
  await initClick('00');
  initHover('02');

  expect(attrOfSpecificCell('00').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('01').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('02').some(hasOccupiedEffect)).toBeTruthy();
  expect(attrOfSpecificCell('03').some(hasOccupiedEffect)).toBeTruthy();
  expect(attrOfSpecificCell('04').some(hasOccupiedEffect)).toBeTruthy();
  expect(attrOfSpecificCell('05').some(hasOccupiedEffect)).toBeFalsy();
  expect(attrOfSpecificCell('05').some(hasShipCellEffect)).toBeFalsy();
});

it.skip('Clicking on occupied spot doesnt change anything', async () => {
  const { initHover, initClick } = setup(true);
  await initClick('00');
  await initClick('03');
  initHover('03');
  expect(attrOfSpecificCell('04').some(hasShipCellEffect)).toBeFalsy();
  expect(attrOfSpecificCell('04').some(hasOccupiedEffect)).toBeTruthy();
});

it.skip('Check if all ships are placed and no further classes are added', async () => {
  const { initClick } = setup(true);
  await initClick('00');
  await initClick('04');
  await initClick('07');
  initClick('09');

  for (let y = 0; y < 10; y++) {
    expect(attrOfSpecificCell(`0${y}`).some(hasShipCellEffect)).toBeTruthy();
  }

  for (let x = 1; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      expect(
        attrOfSpecificCell(`${x}${y}`).some(hasShipCellEffect)
      ).toBeFalsy();
      expect(
        attrOfSpecificCell(`${x}${y}`).some(hasOccupiedEffect)
      ).toBeFalsy();
    }
  }
});

it.skip('works with vertical alignment', () => {
  const { initHover } = setup(false);
  initHover('00');
  expect(attrOfSpecificCell('00').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('10').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('20').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('30').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('40').some(hasOccupiedEffect)).toBeFalsy();
  expect(attrOfSpecificCell('40').some(hasOccupiedEffect)).toBeFalsy();
});
