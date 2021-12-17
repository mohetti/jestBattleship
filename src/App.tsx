import React from 'react';
import SingleBoard from './Components/SingleBoard';
import Harbor from './Components/Harbor';
import './styles/App.css';

function App() {
  return (
    <React.Fragment>
      <div className='split-screen selector'>
        <SingleBoard />
        <Harbor />
      </div>
    </React.Fragment>
  );
}

export default App;
