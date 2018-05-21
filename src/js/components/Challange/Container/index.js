import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const Container = ({ children, onSubmit }) => (
  <form className={styles.container} onSubmit={onSubmit}>
    { children }
  </form>
);

Container.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

Container.defaultProps = {
  children: null,
  onSubmit: () => {},
};

export default Container;