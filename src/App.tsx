import React, { useState } from 'react';

import SingleBoard from './Components/SingleBoard';
import Harbor from './Components/Harbor';

import './styles/main.css';
import './styles/helpers.css';

function App() {
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

export default App;
