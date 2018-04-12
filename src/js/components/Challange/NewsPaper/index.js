import React from "react";
import PropTypes from "prop-types";

import newspaperImg from "assets/images/newspaper.png";

import styles from "./style.sass";

const NewsPaper = ({ children }) =>
  (<div className={styles.newsPaper}>{children}<img src={newspaperImg} alt="" /></div>);

NewsPaper.propTypes = {
  children: PropTypes.node,
};

NewsPaper.defaultProps = {
  children: null,
};

export default NewsPaper;
