import React from "react";
import PropTypes from "prop-types";

import AnimateCC from "react-adobe-animate";

import styles from "./styles.sass";

export default class Component extends React.Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
  }

  constructor() {
    super();
    this.state = {
      easteregg: false,
    };
  }

  changeImg = () => {
    this.setState({
      easteregg: !this.state.easteregg,
    });
  }

  render() {
    return (
      <div className={styles.avatar + (this.state.easteregg ? ` ${styles.easteregg}` : "")} onDoubleClick={this.changeImg}>
        <AnimateCC
          fileName="lishtml5"
          composition="C1475B64B160904BB90B34246A5FF54B"
          style={{ display: !this.state.easteregg ? "block" : "none" }}
        />

        { this.state.easteregg ? [
          <img src="/fox.gif" alt="avatar" key="avatar-ee-img" />,
          <audio
            key="avatar-ee-audio"
            src="/fox.mp3"
            autoPlay
            onEnded={this.changeImg}
          >
            Your browser does not support the <code>audio</code> element.
          </audio>,
        ] : null }
      </div>
    );
  }
}
