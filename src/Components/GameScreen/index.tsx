import React from 'react';
import PlayerScreen from './Components/PlayerScreen';
import GameBoard from './Components/GameBoard';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';

function GameScreen() {
  const playerName = useSelector((state: RootState) => state.name);
  return (
    <div>
      <div>
        <PlayerScreen playerName={playerName} />
      </div>
      <div>
        <PlayerScreen playerName={'Robotomat'} />
      </div>
      <GameBoard />
    </div>
  );
}

export default GameScreen;
