import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.css';

/**
 * @author Olivier Colonna <oliviercolonna@gmail.com>
 * Paragraph - component to render the paragraph
 */
class Paragraph extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { children, className, ...restProps } = this.props;
    const paragraphCls = classnames(styles.paragraphCls, {
      [className]: className
    });

    return (
      <p className={paragraphCls} {...restProps}>
        { children }
      </p>
    );
  }
}

export default Paragraph;
