import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const Header = ({ levelPoints, currentLevelMaxPoints }) => (
  <header className={styles.header}>
    <div className={styles.progressBar}>
      <div
        className={styles.progressValue}
        style={{ width: `${(levelPoints / currentLevelMaxPoints) * 100}%` }}
      />
    </div>
    <div className={styles.progressLabel}>Postęp</div>
    <div className={styles.progress}>
      <span className={styles.progressPoints}>{levelPoints} / {currentLevelMaxPoints}</span>
      <span> pkt</span>
    </div>
  </header>
);

Header.propTypes = {
  levelPoints: PropTypes.number.isRequired,
  currentLevelMaxPoints: PropTypes.number.isRequired,
};

export default Header;