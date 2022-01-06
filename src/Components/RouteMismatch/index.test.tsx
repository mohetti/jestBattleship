import React from 'react';
import { Router, useNavigate } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import App from '../../App';
import store from '../../store';
import { Provider } from 'react-redux';

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
