import React, { useState } from 'react';

import SingleBoard from './Components/SingleBoard';
import Harbor from './Components/Harbor';

import './styles/main.css';
import './styles/helpers.css';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './reducer';

function App() {
  const [isHorizontal, setIsHorizontal] = useState<boolean>(true);
  const theName = useSelector((state: RootState) => state.name);
  const dispatch = useDispatch();

  function toggleAxis() {
    setIsHorizontal(!isHorizontal);
  }

  function startGame(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (target.type === 'submit') {
      console.log('hi');
      dispatch({
        type: 'name/change',
        payload: Math.floor(Math.random() * 100).toString(),
      });
    }
  }
  // implement redux first, then redux toolkit
  // redux state should have the Fleet, the ship (cause only at 0 can be submitted)
  // and the name (cause a name is needed)

  return (
    <div className='split-screen'>
      <SingleBoard isHorizontal={isHorizontal} />
      <Harbor
        isHorizontal={isHorizontal}
        toggleAxis={toggleAxis}
        startGame={startGame}
      />
    </div>
  );
}

export default App;
