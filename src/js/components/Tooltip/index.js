import React from "react";
import PropTypes from "prop-types";
import className from "utils/className";

import styles from "./styles.sass";

export default class Tooltip extends React.Component {
  static propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    bottom: PropTypes.bool,
    top: PropTypes.bool,
    margin: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }

  static defaultProps = {
    left: true,
    right: false,
    bottom: false,
    top: false,
    margin: 8,
    children: null,
    className: "",
    text: "",
  }

  state = {
    visible: false,
  }

  onMouseEnter = () => {
    this.setState({
      visible: true,
    });
  }

  onMouseLeave = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div
        className={
          className(
            styles.tooltipTarget,
            this.props.className,
          )}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        { this.props.children }
        <div
          className={className(
            styles.tooltip,
            this.state.visible ? styles.tooltipVisible : "",
            this.props.left ? styles.tooltipLeft : "",
            this.props.right ? styles.tooltipRight : "",
            this.props.bottom ? styles.tooltipBottom : "",
          )}
          style={{
            right: this.props.right ? -this.props.margin : null,
            left: this.props.left ? -this.props.margin : null,
            top: this.props.top ? -this.props.margin : null,
            bottom: this.props.bottom ? -this.props.margin : null,
          }}
        >
          { this.props.text }
        </div>
      </div>
    );
  }
}