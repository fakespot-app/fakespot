import React from "react";
import PropTypes from "prop-types";

import styles from "./style.sass";

const Container = ({ main, children }) => (
  <div className={styles.container}>
    {children}
    <div className={styles.main}>
      {main}
    </div>
  </div>
);

Container.propTypes = {
  main: PropTypes.node,
  children: PropTypes.node,
};

Container.defaultProps = {
  main: null,
  children: null,
};

export default Container;
