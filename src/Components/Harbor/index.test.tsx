import React from 'react';
import Harbor from '.';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function setup(isBool: boolean) {
  const toggleMock = jest.fn(function () {});
  const axisRole = isBool ? 'vertical' : 'horizontal';

  const utils = render(
    <Harbor
      startGame={toggleMock}
      toggleAxis={toggleMock}
      isHorizontal={isBool}
    />
  );

  const axisBtn = screen.getByRole('button', {
    name: axisRole,
  });

  const nameInput = screen.getByLabelText('Enter your name');

  return { ...utils, axisBtn, nameInput };
}

it('Testing, if button is shown with initial value', () => {
  const { axisBtn } = setup(true);
  expect(axisBtn).toBeInTheDocument();
  expect(axisBtn.textContent).toBe('vertical');
});

it('Testing, if button shows toggled value', () => {
  const { axisBtn } = setup(false);
  expect(axisBtn).toBeInTheDocument();
  expect(axisBtn.textContent).toBe('horizontal');
});

it('Testing if name gets displayed', async () => {
  const { nameInput } = setup(true);
  expect(nameInput).toBeInTheDocument();
  await userEvent.type(nameInput, 'Mohahemi');
  expect(nameInput).toHaveValue('Mohahemi');
});
