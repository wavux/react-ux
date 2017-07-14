import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../Component/Container';
import classnames from 'classnames';
import styles from './styles.css';

/**
 * @author Olivier Colonna, oliviercolonna@gmail.com
 */
const FlexBox = ({ direction, justify, alignContent, alignItems, children, className, ...restProps }) => {
  const horizontalClass = classnames({
    [styles.horizontal]: true,
    [styles.rowReverse]: direction === 'rowReverse',
    [styles.column]: direction === 'column',
    [styles.columnReverse]: direction === 'columnReverse',
    [styles.justifyStart]: justify === 'start',
    [styles.justifyEnd]: justify === 'end',
    [styles.justifyCenter]: justify === 'center',
    [styles.justifyBetween]: justify === 'between',
    [styles.justifyAround]: justify === 'around',
    [styles.alignStart]: alignContent === 'start',
    [styles.alignEnd]: alignContent === 'end',
    [styles.alignCenter]: alignContent === 'center',
    [styles.alignStretch]: alignContent === 'stretch',
    [styles.alignBetween]: alignContent === 'between',
    [styles.alignAround]: alignContent === 'around',
    [styles.alignItemsStart]: alignItems === 'start',
    [styles.alignItemsEnd]: alignItems === 'end',
    [styles.alignItemsCenter]: alignItems === 'center',
    [styles.alignItemsStretch]: alignItems === 'stretch',
    [styles.alignItemsBaseline]: alignItems === 'baseline',
    [className]: className
  });

  return (
    <Container className={horizontalClass} {...restProps}>
      { children }
    </Container>
  );
};

FlexBox.defaultProps = {
  direction: 'row',
  justify: 'start',
  alignContent: 'stretch'
};

FlexBox.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf([
    'row',
    'rowReverse',
    'column',
    'columnReverse'
  ]),
  justify: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around'
  ]),
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'between',
    'around'
  ]),
  alignItems: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'baseline'
  ]),
  className: PropTypes.string
};

export default FlexBox;
