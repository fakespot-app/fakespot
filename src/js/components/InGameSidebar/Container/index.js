import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const InGameSidebarContainer = ({ children }) => (
  <aside className={styles.container}>
    { children }
  </aside>
);

InGameSidebarContainer.propTypes = {
  children: PropTypes.node,
};

InGameSidebarContainer.defaultProps = {
  children: null,
};

export default InGameSidebarContainer;