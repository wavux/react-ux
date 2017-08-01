import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Container from '../../../Component/Container';
import OpeningButton from './OpeningButton';
import styles from './styles.css';

/**
 * @author Olivier Colonna <oliviercolonna@gmailß.com>
 *
 * @class Resizable
 * @extends {Component}
 * Resizable tends to be a reusable layout component, it is possible to set some props like opened and show button.
 */
class Resizable extends Component {
  static defaultProps = {
    opened: true,
    showButton: true,
    className: null,
    children: null
  }

  static propTypes = {
    opened: PropTypes.bool,
    showButton: PropTypes.bool,
    className: PropTypes.string,
    children: (props, propName) => {
      const len = React.Children.count(props.children);
      let error = null;

      if (len > 2) {
        error = new Error(`Invalid prop ${propName} supplied to resizable, the maximum number of children is 2.`);
      }

      return error;
    }
  }

  state = {
    opened: this.props.opened
  }

  componentWillReceiveProps(nextProps) {
    const { opened } = nextProps;

    this.setState({ opened });
  }

  onClickPreviewButton = () => {
    const { setPreviewOpen } = this.props;

    if (setPreviewOpen && typeof setPreviewOpen === 'function') {
      setPreviewOpen(!this.state.opened);
    }

    this.setState({ opened: !this.state.opened });
  }

  render() {
    const { showButton, className, children } = this.props;
    const resizableContainerClass = classnames(styles.resizableContainer, {
      [className]: className
    });

    const previewButton = <OpeningButton rotate={this.state.opened} onClick={this.onClickPreviewButton} />;

    const childrenWithProps = React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        ratio: child.props.ratio,
        opened: this.state.opened,
        rightSide: index === 1
      })
    ));

    return (
      <Container className={resizableContainerClass}>
        { childrenWithProps[0] || null }
        { showButton && previewButton }
        { childrenWithProps[1] || null }
      </Container>
    );
  }
}

export Side from './Side';
export default Resizable;
