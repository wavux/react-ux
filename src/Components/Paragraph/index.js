import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.css';

/**
 * @author Olivier Colonna <oliviercolonna@gmail.com>
 * Paragraph - component to render the paragraph
 */
class Paragraph extends PureComponent {
  static defaultProps = {
    align: 'start',
    className: null
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    align: PropTypes.oneOf(['start', 'center', 'end'])
  };

  render() {
    const { children, className, align, ...restProps } = this.props;
    const paragraphCls = classnames(styles.paragraphCls, {
      [styles[`paragraphAlign-${align}Cls`]]: align,
      [className]: className
    });

    return (
      <p className={paragraphCls} {...restProps}>
        {children}
      </p>
    );
  }
}

export default Paragraph;
