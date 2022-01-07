import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

it('Testing if RouteMismatch gets rendered', () => {
  const history = createMemoryHistory();
  history.push('/someroute');
  render(
    <Router location={history.location} navigator={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  expect(screen.getByText("There's nothing here.")).toBeInTheDocument();
});

it('Testing if Startscreen gets rendered', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Router location={history.location} navigator={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  expect(screen.getByText('vertical')).toBeInTheDocument();
});

it('Testing if GameScreen gets rendered', async () => {
  const history = createMemoryHistory();

  history.push('/');
  render(
    <Router location={history.location} navigator={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  await userEvent.click(screen.getByTestId('00'), { skipHover: true });
  await userEvent.click(screen.getByTestId('11'), { skipHover: true });
  await userEvent.click(screen.getByTestId('77'), { skipHover: true });
  await userEvent.click(screen.getByTestId('99'), { skipHover: true });
  await userEvent.type(screen.getByLabelText('Enter your name'), 'Mohahemi');
  await userEvent.click(screen.getByRole('button', { name: 'Start' }));
  expect(history.location.pathname).toEqual('/game');
});
