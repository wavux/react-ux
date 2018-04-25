import React from 'react';
import PropTypes from 'prop-types';
// import Icon from '../../../../Component/Icon';
import styles from './styles.css';

/**
 * @author Olivier Colonna <oliviercolonna@gmail.com>
 * OpeningButton - reusable component
 * @param  {function} onClick
 * @param  {string} className
 * @param {boolean} rotate
 */
const OpeningButton = () => {
  return <div className={styles.previewButtonContainer} />;
};

OpeningButton.defaultProps = {
  className: '',
  rotate: false
};

OpeningButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  rotate: PropTypes.bool
};

export default OpeningButton;
