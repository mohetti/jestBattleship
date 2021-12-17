import React from 'react';

// Components import *start
import SingleBoard from './Components/SingleBoard';
import Harbor from './Components/Harbor';
// Components import *end

// css imports *start
import './styles/main.css';
import './styles/helpers.css';
// css imports *end

function App() {
  return (
    <div className='split-screen'>
      <SingleBoard />
      <Harbor />
    </div>
  );
}

export default App;
