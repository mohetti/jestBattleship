import React, { useState } from 'react';
import Axis from './Axis';
import Name from './Name';
import './harbor.css';

type Props = {
  isHorizontal: boolean;
  toggleAxis: () => void;
  startGame: (e: React.MouseEvent<HTMLFormElement>) => void;
};

function Harbor(props: Props) {
  const [playerName, setPlayerName] = useState('');

  const changePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  return (
    <div className='fill-space hghl-yellow'>
      <div className='flex-column display-right mgt mgr'>
        <Axis isHorizontal={props.isHorizontal} toggleAxis={props.toggleAxis} />
        <Name
          changePlayerName={changePlayerName}
          playerName={playerName}
          startGame={props.startGame}
        />
      </div>
    </div>
  );
}

export default Harbor;
