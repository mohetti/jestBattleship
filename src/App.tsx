import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import StartScreen from './Components/StartScreen';
import GameScreen from './Components/GameScreen';
import RouteMismatch from './Components/RouteMismatch';
import './styles/main.css';
import './styles/helpers.css';

function App() {
  return (
    <div className='full-screen'>
      <h1>Battleship</h1>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/game' element={<GameScreen />} />
        <Route path='*' element={<RouteMismatch />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
