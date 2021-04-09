import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function ErrorPage(props) {
  const { message } = props;
  return (
    <div style={{ textAlign: 'center', marginTop: '300px' }}>
      <FontAwesomeIcon icon={faExclamationTriangle} size="2x" color="red" />
      <h3 style={{ color: 'white', display: 'inline-block', marginLeft: '10px' }}>{message}</h3>
    </div>
  );
}

ErrorPage.propTypes = { message: PropTypes.string.isRequired };

export default ErrorPage;
