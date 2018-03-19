import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const BestSource = ({ bestSource }) => (
  <section>
    <p className={styles.sourceTitle}>Polecane źródło</p>
    <p className={styles.bestSource}>
      <a href={bestSource}>{bestSource}</a>
    </p>
  </section>
);

BestSource.propTypes = {
  bestSource: PropTypes.string.isRequired,
};

export default BestSource;
