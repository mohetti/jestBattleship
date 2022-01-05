import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleBoard from '..';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../store';

export function setup(isBool: boolean) {
  const utils = render(
    <Provider store={store}>
      <SingleBoard isHorizontal={isBool} />
    </Provider>
  );
  const initHover = async (coord: string) => {
    await userEvent.hover(screen.getByTestId(coord));
  };
  const initClick = async (coord: string) => {
    await userEvent.click(screen.getByTestId(coord), {
      skipHover: true,
    });
  };
  return { ...utils, initHover, initClick };
}

export function hasShipCellEffect(x: AttrProps) {
  return x.value === 'ship-cell';
}

export function hasOccupiedEffect(x: AttrProps) {
  return x.value === 'occupied-cell';
}

export function attrOfSpecificCell(testid: string) {
  return Array.from(screen.getByTestId(testid).attributes);
}

type AttrProps = {
  value: string | undefined;
};
