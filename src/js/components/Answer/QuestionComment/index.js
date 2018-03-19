import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const QuestionComment = ({ comment, title }) => (
  <div className={styles.comment}>
    {title !== "" ? (
      <h4>{title}</h4>
    ) : null }
    <p>{comment}</p>
  </div>
);

QuestionComment.propTypes = {
  comment: PropTypes.string.isRequired,
  title: PropTypes.string,
};

QuestionComment.defaultProps = {
  title: "",
};

export default QuestionComment;