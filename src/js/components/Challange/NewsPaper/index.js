import React from "react";
import PropTypes from "prop-types";

import newspaperImg from "assets/images/newspaper.png";

import styles from "./style.sass";

const NewsPaper = ({ titleText }) =>
  (
    <div className={styles.newsPaper}>
      <h1>{titleText}</h1>
      <img src={newspaperImg} alt="" />
    </div>
  );

NewsPaper.propTypes = {
  titleText: PropTypes.string,
};

NewsPaper.defaultProps = {
  titleText: "",
};

export default NewsPaper;
