import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App, { GameScreen, StartScreen } from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<StartScreen />} />
          <Route path='/game' element={<GameScreen />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
