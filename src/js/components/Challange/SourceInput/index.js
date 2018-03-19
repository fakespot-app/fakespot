import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

export default class SourceInput extends React.PureComponent {
  static propTypes = {
    onSourceInput: PropTypes.func.isRequired,
  }

  render() {
    const { onSourceInput } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.inputLine}>
          <input
            type="url"
            required
            onInput={onSourceInput}
            onChange={onSourceInput}
            placeholder="Wklej źródło..."
          />
        </div>
      </div>
    );
  }
}