import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.css';

/**
 * App is the entry point of all things
 */
const App = ({ children, noBounce, fullScreen, center, ...restProps }) => {
  const appCls = classnames(styles.app, {
    [styles.bounce]: noBounce,
    [styles.fullScreen]: fullScreen,
    [styles.center]: center
  });

  return (
    <div className={appCls} {...restProps}>
      {React.cloneElement(children, { ...restProps })}
    </div>
  );
};

App.defaultProps = {
  noBounce: false,
  fullScreen: false,
  center: false
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  noBounce: PropTypes.bool,
  fullScreen: PropTypes.bool,
  center: PropTypes.bool
};

export default App;
