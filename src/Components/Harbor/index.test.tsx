import React from 'react';
import Harbor from '.';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

function setup(isBool: boolean) {
  const toggleMock = jest.fn(function () {});
  const utils = render(
    <Harbor toggleAxis={toggleMock} isHorizontal={isBool} />
  );
  const button = screen.getByRole('button');
  return { ...utils, button };
}

it.skip('Testing, if button is shown with initial value', () => {
  const { button } = setup(true);
  expect(button).toBeInTheDocument();
  expect(button.textContent).toBe('vertical');
});

it.skip('Testing, if button shows toggled value', () => {
  const { button } = setup(false);
  expect(button).toBeInTheDocument();
  expect(button.textContent).toBe('horizontal');
});
