import React, { useState } from 'react';
import { RootState } from '../../reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type Props = {
  transformErrorMsg: (type: string, msg?: string) => void;
};
function Name(props: Props) {
  const [playerName, setPlayerName] = useState('');
  const fleet = useSelector((state: RootState) => state.fleet);
  let navigate = useNavigate();

  const changePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };
  const dispatch = useDispatch();

  function submitIsNotReady(target: string) {
    if (target !== 'submit') return true;
    if (playerName === '') {
      props.transformErrorMsg('name', 'Please enter a name');
      return true;
    }
    if (Object.keys(fleet).length < 4) {
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
