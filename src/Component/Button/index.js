import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.css';

const Button = (props) => {
  const {
    primary,
    black,
    danger,
    noBackground,
    whiteBackground,
    active,
    inline,
    disabled,
    underlined,
    className,
    ...restProps
  } = props;

  const buttonClassName = classnames(styles.button, {
    [styles.primary]: primary,
    [styles.black]: black,
    [styles.default]: props.default,
    [styles.danger]: danger,
    [styles.noBackground]: noBackground,
    [styles.whiteBackground]: whiteBackground,
    [styles.active]: active,
    [styles.inline]: inline,
    [styles.underlined]: underlined,
    [styles.disabled]: disabled,
    [className]: className
  });

  return (
    <button className={buttonClassName} disabled={disabled} tabIndex="-1" {...restProps}>
      { props.children }
    </button>
  );
};

Button.defaultProps = {
  default: false,
  active: false,
  disabled: false,
  black: false,
  primary: false,
  danger: false,
  noBackground: false,
  whiteBackground: false,
  inline: false,
  className: null
};

Button.propTypes = {
  active: PropTypes.bool,
  black: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  noBackground: PropTypes.bool,
  whiteBackground: PropTypes.bool,
  inline: PropTypes.bool,
  className: PropTypes.string
};

export default Button;
