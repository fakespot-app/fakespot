import React from "react";
import PropTypes from "prop-types";

import Label from "../Label";

import styles from "./styles.sass";

const SourceSection = ({ onSourceChange }) => (
  <section className={styles.container}>
    <Label className={styles.label}>
      <>
        2. Wklej swoje źródło, aby odblokować możliwość oceny.
      </>
    </Label>

    <input
      type="text"
      className={styles.sourceInput}
      onChange={onSourceChange}
      placeholder="https://example.com"
    />
  </section>
);

SourceSection.propTypes = {
  onSourceChange: PropTypes.func.isRequired,
};

export default SourceSection;