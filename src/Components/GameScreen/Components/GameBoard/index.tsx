import React from 'react';
import usePlayer from '../../../../customHooks/usePlayer';
type Props = {};

function GameBoard(props: Props) {
  const [player] = usePlayer();
  console.log(player);
  player.getBoard();
  return (
    <div>
      <div>Hi</div>
    </div>
  );
}

export default GameBoard;
