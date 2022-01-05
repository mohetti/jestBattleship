import React, { useState } from 'react';
import Axis from './Axis';
import Name from './Name';
import ErrorMsg from './ErrorMsg';
import './harbor.css';

type Props = {
  isHorizontal: boolean;
  toggleAxis: () => void;
};

function Harbor(props: Props) {
  const [errorMsgName, setErrorMsgName] = useState('');
  const [errorMsgFleet, setErrorMsgFleet] = useState('');

  function transformErrorMsg(type: string, msg?: string) {
    if (type === 'name') return setErrorMsgName(msg!);
    if (type === 'fleet') return setErrorMsgFleet(msg!);
    if (type === 'reset') {
      setErrorMsgName('');
      setErrorMsgFleet('');
    }
  }

  return (
    <div className='fill-space hghl-yellow'>
      <div className='flex-column display-right mgt mgr'>
        <Axis isHorizontal={props.isHorizontal} toggleAxis={props.toggleAxis} />
        <Name transformErrorMsg={transformErrorMsg} />
        <ErrorMsg errorMsgName={errorMsgName} errorMsgFleet={errorMsgFleet} />
      </div>
    </div>
  );
}

export default Harbor;
