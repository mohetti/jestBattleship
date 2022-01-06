import React, { useState } from 'react';
import SingleBoard from '../SingleBoard';
import Harbor from '../Harbor';

function StartScreen() {
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

export default StartScreen;
