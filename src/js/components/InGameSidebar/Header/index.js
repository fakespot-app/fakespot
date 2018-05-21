import React from "react";
import PropTypes from "prop-types";
import Label from "../Label/";

import styles from "./styles.sass";

const Header = ({ levelPoints, currentLevelMaxPoints }) => (
  <header className={styles.header}>
    <div className={styles.progressBar}>
      <div
        className={styles.progressValue}
        style={{ width: `${(levelPoints / currentLevelMaxPoints) * 100}%` }}
      />
    </div>
    <Label className={styles.progressLabel}>
      <>
        Postęp
      </>
    </Label>
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