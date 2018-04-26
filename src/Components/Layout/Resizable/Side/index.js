import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Container from '../../../../components/Container';
import styles from './styles.css';

/**
 * @author Olivier Colonna, olivier.colonna@drivetribe.com
 * Side
 * Render a side inside Resizable
 */
const Side = ({ opened, className, children, rightSide, ratio, fixed, ...restProps }) => {
  const sideClass = classnames(styles.side, {
    [styles.rightSide]: rightSide,
    [className]: className,
    [styles.opened]: opened
  });
  const ratioStyle = ratio && { flex: `0 ${ratio} auto` };
  const fixedStyle = fixed && { width: `calc(100% + ${fixed}px)` };
  const style = ratioStyle || fixedStyle;

  return (
    <Container className={sideClass} style={style} {...restProps}>
      {children}
    </Container>
  );
};

Side.defaultProps = {
  ratio: 1,
  fixed: null,
  opened: true,
  className: null,
  children: null
};

Side.propTypes = {
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fixed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  opened: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node])
};

export default Side;
