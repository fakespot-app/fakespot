import React from "react";
import { PropTypes } from "prop-types";

const Icon = ({ children }) => <i className="material-icons">{children}</i>;

Icon.propTypes = {
  children: PropTypes.node,
};

Icon.defaultProps = {
  children: null,
};

export default Icon;