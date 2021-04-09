import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function Spinner() {
  return (
    <div style={{ textAlign: 'center', marginTop: '300px' }}>
      <FontAwesomeIcon icon={faCog} rotation={90} pulse size="2x" color="red" />
      <h3 style={{ color: 'white', marginLeft: '10px' }}>Loading</h3>
    </div>
  );
}

export default Spinner;
