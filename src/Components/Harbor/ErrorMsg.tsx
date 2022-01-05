import React from 'react';

type Props = {
  errorMsgName: string;
  errorMsgFleet: string;
};

function ErrorMsg(props: Props) {
  const { errorMsgName, errorMsgFleet } = props;
  return (
    <div role='alert-msg' className='alert'>
      {errorMsgName && <React.Fragment>{errorMsgName}</React.Fragment>}
      {errorMsgFleet && <React.Fragment>{errorMsgFleet}</React.Fragment>}
    </div>
  );
}
export default ErrorMsg;
