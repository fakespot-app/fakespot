import React from "react";
import PropTypes from "prop-types";
import Label from "../Label/";

import styles from "./styles.sass";

const LevelDescription = ({
  currentLevel, currentLevelDescription, currentLevelHeader, currentLevelImage,
}) => (
  <main className={styles.container}>
    <Label className={styles.levelLabel}>
      <>
        Poziom {currentLevel}
      </>
    </Label>
    <div className={styles.levelHeader}>
      <img src={currentLevelImage} alt="" className={styles.levelImage} />
      { currentLevelHeader }
    </div>
    <p className={styles.levelDescription}>{ currentLevelDescription }</p>
  </main>
);

LevelDescription.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  currentLevelImage: PropTypes.string.isRequired,
  currentLevelHeader: PropTypes.string.isRequired,
  currentLevelDescription: PropTypes.string.isRequired,
};

export default LevelDescription;