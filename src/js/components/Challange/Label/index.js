import React from "react";
import classNameFn from "utils/className";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const Label = ({ children, className, ...rest }) => (
  <div className={classNameFn(styles.label, className)} {...rest}>{children}</div>
);

Label.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

Label.defaultProps = {
  children: null,
  className: "",
};

export default Label;