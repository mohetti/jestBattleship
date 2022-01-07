import React from 'react';
import PlayerScreen from './Components/PlayerScreen';
import GameBoard from './Components/GameBoard';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';

function GameScreen() {
  const playerName = useSelector((state: RootState) => state.name);
  const playerBoard = useSelector(
    (state: RootState) => state.playerObject.player
  );
  const computerBoard = useSelector(
    (state: RootState) => state.playerObject.computer
  );
  console.log(playerBoard.receiveAttack([0, 0]));
  console.log(playerBoard.receiveAttack([0, 1]));
  console.log(playerBoard.receiveAttack([0, 2]));
  console.log(playerBoard.receiveAttack([0, 3]));
  return (
    <div>
      <div>
        <PlayerScreen playerName={playerName} />
      </div>
      <div>
        <PlayerScreen playerName={'Robotomat'} />
      </div>
    </div>
  );
}

export default GameScreen;
