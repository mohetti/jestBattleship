import React from 'react';

type Props = {
  isHorizontal: boolean;
  toggleAxis: () => void;
};

function Axis(props: Props) {
  return (
    <React.Fragment>
      <button className='button' onClick={props.toggleAxis}>
        {props.isHorizontal ? 'vertical' : 'horizontal'}
      </button>
    </React.Fragment>
  );
}

export default Axis;
