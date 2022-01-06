import React from 'react';
import { Link } from 'react-router-dom';
function RouteMismatch() {
  return (
    <React.Fragment>
      <h1>There's nothing here.</h1>
      <Link to='/'>Go back to the Start Screen</Link>
    </React.Fragment>
  );
}

export default RouteMismatch;
