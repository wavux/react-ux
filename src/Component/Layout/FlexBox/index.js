import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../Component/Container';
import classnames from 'classnames';
import * as FLEXBOX from '../../../Constants/FlexBox';
import styles from './styles.css';

/**
 * @author Olivier Colonna, oliviercolonna@gmail.com
 * FlexBox
 */
const FlexBox = ({ direction, flexWrap, justify, alignContent, alignItems, children, className, ...restProps }) => {
  const horizontalClass = classnames({
    [styles.horizontal]: true,
    [styles.rowReverse]: direction === FLEXBOX.ROW_REVERSE,
    [styles.wrap]: flexWrap === FLEXBOX.WRAP,
    [styles.noWrap]: flexWrap === FLEXBOX.NO_WRAP,
    [styles.wrapReverse]: flexWrap === FLEXBOX.WRAP_REVERSE,
    [styles.column]: direction === FLEXBOX.COLUMN,
    [styles.columnReverse]: direction === FLEXBOX.COLUMN_REVERSE,
    [styles.justifyStart]: justify === FLEXBOX.START,
    [styles.justifyEnd]: justify === FLEXBOX.END,
    [styles.justifyCenter]: justify === FLEXBOX.CENTER,
    [styles.justifyBetween]: justify === FLEXBOX.BETWEEN,
    [styles.justifyAround]: justify === FLEXBOX.AROUND,
    [styles.alignStart]: alignContent === FLEXBOX.START,
    [styles.alignEnd]: alignContent === FLEXBOX.END,
    [styles.alignCenter]: alignContent === FLEXBOX.CENTER,
    [styles.alignStretch]: alignContent === FLEXBOX.STRETCH,
    [styles.alignBetween]: alignContent === FLEXBOX.BETWEEN,
    [styles.alignAround]: alignContent === FLEXBOX.AROUND,
    [styles.alignItemsStart]: alignItems === FLEXBOX.START,
    [styles.alignItemsEnd]: alignItems === FLEXBOX.END,
    [styles.alignItemsCenter]: alignItems === FLEXBOX.CENTER,
    [styles.alignItemsStretch]: alignItems === FLEXBOX.STRETCH,
    [styles.alignItemsBaseline]: alignItems === FLEXBOX.BASELINE,
    [className]: className
  });

  return (
    <Container className={horizontalClass} {...restProps}>
      { children }
    </Container>
  );
};

FlexBox.defaultProps = {
  direction: FLEXBOX.ROW,
  justify: FLEXBOX.START,
  alignContent: FLEXBOX.STRETCH
};

FlexBox.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf([
    FLEXBOX.ROW,
    FLEXBOX.ROW_REVERSE,
    FLEXBOX.COLUMN,
    FLEXBOX.ROW_REVERSE
  ]),
  flexWrap: PropTypes.oneOf([
    FLEXBOX.WRAP,
    FLEXBOX.NO_WRAP,
    FLEXBOX.WRAP_REVERSE
  ]),
  justify: PropTypes.oneOf([
    FLEXBOX.START,
    FLEXBOX.END,
    FLEXBOX.CENTER,
    FLEXBOX.BETWEEN,
    FLEXBOX.AROUND
  ]),
  alignContent: PropTypes.oneOf([
    FLEXBOX.START,
    FLEXBOX.END,
    FLEXBOX.CENTER,
    FLEXBOX.STRETCH,
    FLEXBOX.BETWEEN,
    FLEXBOX.AROUND
  ]),
  alignItems: PropTypes.oneOf([
    FLEXBOX.START,
    FLEXBOX.END,
    FLEXBOX.CENTER,
    FLEXBOX.STRETCH,
    FLEXBOX.BASELINE
  ]),
  className: PropTypes.string
};

export default FlexBox;
