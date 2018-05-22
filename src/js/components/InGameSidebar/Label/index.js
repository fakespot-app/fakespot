import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const Label = ({ children, ...rest }) => (
  <div className={styles.label} {...rest}>{children}</div>
);

Label.propTypes = {
  children: PropTypes.element,
};

Label.defaultProps = {
  children: null,
};

export default Label;