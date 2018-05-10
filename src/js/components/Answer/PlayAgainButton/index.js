import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const PlayAgainButton = ({ onClick }) => (
  <button className={`btn flat self-end ${styles.nextButton}`} onClick={onClick}>Gram dalej &gt;</button>
);

PlayAgainButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlayAgainButton;