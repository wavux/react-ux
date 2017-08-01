import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../../../Component/Button';
// import Icon from '../../../../Component/Icon';
import styles from './styles.css';

/**
 * @author Olivier Colonna <oliviercolonna@gmail.com>
 * OpeningButton - reusable component
 * @param  {function} onClick
 * @param  {string} className
 * @param {boolean} rotate
 */
const OpeningButton = ({ onClick, className, rotate }) => {
  const previewButtonClass = classnames({
    [styles.previewButton]: !rotate,
    [styles.rotatedPreviewButton]: rotate,
    [className]: className
  });
  const previewTextClass = classnames({
    [styles.rotatedPreviewText]: rotate,
    [styles.previewText]: !rotate
  });

  return (
    <div className={styles.previewButtonContainer}>
      <Button className={previewButtonClass} onClick={onClick}>
        { /* <Icon name="leftChevron" className={styles.leftChevron} /> */ }
        <span className={previewTextClass}>
          PREVIEW
        </span>
      </Button>
    </div>
  );
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
