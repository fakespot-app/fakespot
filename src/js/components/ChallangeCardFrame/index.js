import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const ChallangeCardFrame = ({ children }) => (<div className={styles.container}>{children}</div>);

ChallangeCardFrame.propTypes = {
  children: PropTypes.node,
};

ChallangeCardFrame.defaultProps = {
  children: null,
};

export default ChallangeCardFrame;