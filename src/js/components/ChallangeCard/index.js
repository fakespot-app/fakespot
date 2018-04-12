import React from "react";
import PropTypes from "prop-types";

import styles from "./style.sass";

const ChallangeCard = ({ children, ...props }) =>
  (<div className={styles.challangeCard} {...props}>{children}</div>);

ChallangeCard.propTypes = {
  children: PropTypes.node,
};

ChallangeCard.defaultProps = {
  children: null,
};

export default ChallangeCard;
