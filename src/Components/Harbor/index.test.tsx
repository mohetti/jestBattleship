import React from 'react';
import Harbor from '.';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store';

type T = {
  nameInput: HTMLElement;
};

function setup(isBool: boolean) {
  const toggleMock = jest.fn(function () {});
  const axisRole = isBool ? 'vertical' : 'horizontal';

  const utils = render(
    <Provider store={store}>
      <Harbor toggleAxis={toggleMock} isHorizontal={isBool} />
    </Provider>
  );
  const nameInput = screen.getByLabelText('Enter your name');

  return { ...utils, nameInput };
}

function toggleSetup(setup: T, isHorizontal: boolean) {
  const utils = { ...setup };
  const axisRole = isHorizontal ? 'vertical' : 'horizontal';
  const axisBtn = screen.getByRole('button', {
    name: axisRole,
  });
  return { ...utils, axisBtn };
}

function formSetup(setup: T) {
  const utils = { ...setup };
  const getAlertBox = screen.getByRole('alert-msg');
  const getBtn = screen.getByRole('button', { name: 'Start' });
  return { ...utils, getAlertBox, getBtn };
}

it('Testing, if button is shown with initial value', () => {
  const { axisBtn } = toggleSetup(setup(true), true);
  expect(axisBtn).toBeInTheDocument();
  expect(axisBtn.textContent).toBe('vertical');
});

it('Testing, if button shows toggled value', () => {
  const { axisBtn } = toggleSetup(setup(false), false);
  expect(axisBtn).toBeInTheDocument();
  expect(axisBtn.textContent).toBe('horizontal');
});

it('Testing if name gets displayed', async () => {
  const { nameInput } = setup(true);
  expect(nameInput).toBeInTheDocument();
  await userEvent.type(nameInput, 'Mohahemi');
  expect(nameInput).toHaveValue('Mohahemi');
});

it('Testing error messages displayed correctly', async () => {
  const { getAlertBox, getBtn, nameInput } = formSetup(setup(true));
  expect(getAlertBox).toHaveTextContent('');
  await userEvent.click(getBtn);
  expect(getAlertBox).toHaveTextContent('Please enter a name');
  await userEvent.type(nameInput, 'Mohahemi');
  expect(getAlertBox).toHaveTextContent('');
  await userEvent.click(getBtn);
  expect(getAlertBox).toHaveTextContent('Please place all ships');
});
