import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const InputLine = ({
  onSourceInput,
}) => (
  <div className={styles.inputLine}>
    <input
      type="url"
      required
      onInput={onSourceInput}
      onChange={onSourceInput}
      placeholder="Wklej źródło..."
    />
  </div>
);

InputLine.propTypes = {
  onSourceInput: PropTypes.func.isRequired,
};

export default InputLine;
