import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.css';

/**
 * Quote
 */
class Quote extends Component {
  static defaultProps = {
    className: null,
    cite: null,
    quotee: null
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    cite: PropTypes.string,
    quotee: PropTypes.string
  }

  render() {
    const { children, cite, className, quotee, ...restProps } = this.props;
    const quoteCls = classnames(styles.quoteCls, {
      [className]: className
    });

    return (
      <div className={styles.blockQuoteCls}>
        <blockquote className={quoteCls} cite={cite} {...restProps}>
          { children }
        </blockquote>
        {
          quotee &&
          <span className={styles.quoteeCls}>
            { quotee }
          </span>
        }
      </div>
    );
  }
}

export default Quote;
