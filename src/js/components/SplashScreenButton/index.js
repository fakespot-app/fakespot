import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const SplashScreenButton = ({ onClick }) => (
  <button className={styles.button} onClick={onClick}>ZACZYNAMY!</button>
);

SplashScreenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SplashScreenButton;