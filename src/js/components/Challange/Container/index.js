import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const Container = ({ children }) => (
  <main className={styles.container}>
    { children }
  </main>
);

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: null,
};

export default Container;