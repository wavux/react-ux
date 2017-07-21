import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.css';

/**
 * Olivier Colonna, <oliviercolonna@gmail.com>
 */
class Heading extends Component {
  static defaultProps = {
    tag: 'h1',
    align: 'start',
    bold: false,
    uppercase: false
  }

  static propTypes = {
    align: PropTypes.oneOf(['start', 'center', 'end']),
    bold: PropTypes.bool,
    uppercase: PropTypes.bool,
    tag: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    const { align, bold, uppercase, tag: Tag, className, children, ...restProps } = this.props;
    const headingCls = classnames(styles.headingCls, {
      [styles[`headingAlign-${align}Cls`]]: align,
      [styles.boldCls]: bold,
      [styles.uppercaseCls]: uppercase,
      [className]: className
    });

    return (
      <Tag className={headingCls} {...restProps}>
        { children }
      </Tag>
    );
  }
}

export default Heading;
