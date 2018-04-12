import React from "react";

import AnimateCC from "react-adobe-animate";

import styles from "./styles.sass";

import foxGif from "assets/images/fox.gif";
import foxMp3 from "assets/sounds/fox.mp3";

export default class Component extends React.Component {
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
          animationName="lishtml5"
          style={{ display: !this.state.easteregg ? "block" : "none" }}
        />

        { this.state.easteregg ? [
          <img src={foxGif} alt="avatar" key="avatar-ee-img" />,
          <audio
            key="avatar-ee-audio"
            src={foxMp3}
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
