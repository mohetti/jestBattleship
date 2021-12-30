import React from 'react';
import ReactDOM from 'react-dom';
import SingleBoard from '.';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import {
  nodeAttributeArray,
  hasShipCellEffect,
  hasOccupiedEffect,
  attrOfSpecificCell,
} from './util/testhelpers';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('Renders cells correctly', () => {
  render(<SingleBoard isHorizontal={true} />);

  const rowContainers = screen.getAllByTestId('row-container');
  expect(rowContainers).toHaveLength(10);
  for (let i = 0; i < 10; i++) {
    expect(rowContainers[i].childNodes).toHaveLength(10);
  }
});

it('Hover displays ship-cell effect correctly', () => {
  render(<SingleBoard isHorizontal={true} />);

  userEvent.hover(screen.getByTestId('00'));

  expect(attrOfSpecificCell('00').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('01').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('02').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('03').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('04').some(hasOccupiedEffect)).toBeFalsy();
  expect(attrOfSpecificCell('05').some(hasShipCellEffect)).toBeFalsy();
});

it('Hover displays occupied effect correctly', () => {
  render(<SingleBoard isHorizontal={true} />);

  userEvent.hover(screen.getByTestId('08'));
  expect(attrOfSpecificCell('07').some(hasShipCellEffect)).toBeFalsy();
  expect(attrOfSpecificCell('07').some(hasOccupiedEffect)).toBeFalsy();
  expect(attrOfSpecificCell('08').some(hasOccupiedEffect)).toBeTruthy();
  expect(attrOfSpecificCell('09').some(hasOccupiedEffect)).toBeTruthy();
});

it('Clicking empty field shows right class and hovering over occupied cell does too', () => {
  render(<SingleBoard isHorizontal={true} />);

  act(() => {
    userEvent.click(screen.getByTestId('00'));
  });
  act(() => {
    userEvent.hover(screen.getByTestId('02'));
  });

  expect(attrOfSpecificCell('00').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('01').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('02').some(hasOccupiedEffect)).toBeTruthy();
  expect(attrOfSpecificCell('03').some(hasOccupiedEffect)).toBeTruthy();
  expect(attrOfSpecificCell('04').some(hasOccupiedEffect)).toBeTruthy();
  expect(attrOfSpecificCell('05').some(hasOccupiedEffect)).toBeFalsy();
  expect(attrOfSpecificCell('05').some(hasShipCellEffect)).toBeFalsy();
});

it('Clicking on occupied spot doesnt change anything', () => {
  render(<SingleBoard isHorizontal={true} />);
  act(() => {
    userEvent.click(screen.getByTestId('00'));
  });
  userEvent.click(screen.getByTestId('03'));

  expect(attrOfSpecificCell('04').some(hasShipCellEffect)).toBeFalsy();
  expect(attrOfSpecificCell('04').some(hasOccupiedEffect)).toBeTruthy();
});

it('Check if all ships are placed and no further classes are added', () => {
  render(<SingleBoard isHorizontal={true} />);
  act(() => {
    userEvent.click(screen.getByTestId('00'), undefined, { skipHover: true });
  });
  act(() => {
    userEvent.click(screen.getByTestId('04'), undefined, { skipHover: true });
  });
  act(() => {
    userEvent.click(screen.getByTestId('07'), undefined, { skipHover: true });
  });
  userEvent.click(screen.getByTestId('09'), undefined, { skipHover: true });

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

it('works with vertical alignment', () => {
  render(<SingleBoard isHorizontal={false} />);

  userEvent.hover(screen.getByTestId('00'));
  expect(attrOfSpecificCell('00').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('10').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('20').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('30').some(hasShipCellEffect)).toBeTruthy();
  expect(attrOfSpecificCell('40').some(hasOccupiedEffect)).toBeFalsy();
  expect(attrOfSpecificCell('40').some(hasOccupiedEffect)).toBeFalsy();
});
