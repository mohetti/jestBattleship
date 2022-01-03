import React from 'react';

type Props = {
  changePlayerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  playerName: string;
  startGame: (e: React.MouseEvent<HTMLFormElement>) => void;
};

function Name(props: Props) {
  const { changePlayerName, playerName, startGame } = props;
  return (
    <div>
      <form onClick={startGame}>
        <label htmlFor='name'>Enter your name</label>
        <input
          onChange={changePlayerName}
          type='text'
          id='name'
          placeholder='Enter your name'
          value={playerName}
        />
        <input type='submit' value='Start' />
      </form>
    </div>
  );
}

export default Name;
