import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.css';

/**
 * Class Container
 * @author oliviercolonna@gmail.com
 */
class Container extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    vertical: PropTypes.bool,
    horizontal: PropTypes.bool,
    className: PropTypes.string,
  }

  render = () => {
    const { children, vertical, horizontal, className, ...restProps } = this.props;
    const containerClass = classnames(styles.container, {
      [styles.containerScrollY]: vertical,
      [styles.containerScrollX]: horizontal,
      [className]: className,
    });

    return (
      <div className={containerClass} {...restProps}>
        { children }
      </div>
    );
  }
}

export default Container;
