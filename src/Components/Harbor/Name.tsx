import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Fleet } from '../../Types/shipTypes';

type Props = {
  transformErrorMsg: (type: string, msg?: string) => void;
};
function Name(props: Props) {
  const [playerName, setPlayerName] = useState('');
  const fleet: Fleet = useAppSelector((state) => state.fleet);
  let navigate = useNavigate();

  const changePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };
  const dispatch = useAppDispatch();

  function submitIsNotReady(target: string) {
    if (target !== 'submit') return true;
    if (playerName === '') {
      props.transformErrorMsg('name', 'Please enter a name');
      return true;
    }
    if (fleet.tinyShip.length === 0) {
      props.transformErrorMsg('fleet', 'Please place all ships');
      return true;
    }
    return false;
  }

  function handleForm(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    props.transformErrorMsg('reset');
    const target = e.target as HTMLInputElement;
    if (submitIsNotReady(target.type)) return;
    dispatch({
      type: 'name/change',
      payload: playerName,
    });

    dispatch({
      type: 'player/placeShips',
      payload: fleet,
    });
    navigate('/game');
  }
  return (
    <div>
      <form onClick={handleForm}>
        <label htmlFor='name'>Enter your name</label>
        <input
          onChange={changePlayerName}
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
          value={playerName}
        />
        <input type='submit' value='Start' />
      </form>
    </div>
  );
}

export default Name;
