import React, { useState } from 'react';
import SingleBoard from './Components/SingleBoard';
import Harbor from './Components/Harbor';
import { NavLink, Outlet } from 'react-router-dom';

import './styles/main.css';
import './styles/helpers.css';

export function StartScreen() {
  const [isHorizontal, setIsHorizontal] = useState<boolean>(true);

  function toggleAxis() {
    setIsHorizontal(!isHorizontal);
  }
  return (
    <div className='split-screen'>
      <SingleBoard isHorizontal={isHorizontal} />
      <Harbor isHorizontal={isHorizontal} toggleAxis={toggleAxis} />
    </div>
  );
}

export function GameScreen() {
  return <div>This is the Game Screen</div>;
}

function App() {
  return (
    <div className='full-screen'>
      <h1>Battleship</h1>
      <Outlet />
    </div>
  );
}

export default App;
