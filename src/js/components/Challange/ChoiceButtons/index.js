import React from "react";
import className from "utils/className";
import Icon from "components/Icon/";
import PropTypes from "prop-types";

import Label from "../Label";

import styles from "./styles.sass";

const ChoiceButtons = ({ isSourceValid, choiceSubmitted, onChoiceChange }) => (
  <section className={styles.container}>
    <Label className={styles.label}>
      <>
        3. Oceń czy news jest prawdziwy, czy fałszywy.
      </>
    </Label>

    <div
      className={styles.buttonsContainer}
    >
      <button
        type="submit"
        disabled={!isSourceValid}
        className={className(
          styles.button,
          styles.buttonTrue,
        )}
        onClick={onChoiceChange(true)}
      >
        <div className={styles.icon}>
          <Icon>lock</Icon>
          <Icon>done</Icon>
        </div>
        <span>Prawda</span>
      </button>
      <button
        type="submit"
        disabled={!isSourceValid}
        className={className(
          styles.button,
          styles.buttonFalse,
        )}
        onClick={onChoiceChange(false)}
      >
        <div className={styles.icon}>
          <Icon>lock</Icon>
          <Icon>lock</Icon>
        </div>
        <span>Fałsz</span>
      </button>
    </div>
  </section>
);

ChoiceButtons.propTypes = {
  isSourceValid: PropTypes.bool.isRequired,
};

export default ChoiceButtons;