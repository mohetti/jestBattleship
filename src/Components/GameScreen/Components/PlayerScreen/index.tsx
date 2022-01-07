import React from 'react';

type Props = {
  playerName: string;
};

function PlayerScreen(props: Props) {
  return <h2>{props.playerName}</h2>;
}

export default PlayerScreen;
