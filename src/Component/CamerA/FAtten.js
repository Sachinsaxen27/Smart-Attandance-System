import React from 'react';
import { withRouter } from 'react-router-dom';

function FAtten(props) {
  const scanResult = new URLSearchParams(props.location.search).get('scanResult');

  return (
    <div>
      <h1>Scan Result: {scanResult}</h1>
    </div>
  );
}

export default withRouter(FAtten);
