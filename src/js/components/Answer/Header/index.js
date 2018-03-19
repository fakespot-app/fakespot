import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const Header = ({ answerCorrect, isTrue, challangeText }) => (
  <header>
    <p className={`mt-2 text-center ${styles.resultMsg}`}>
      <span className={`inline-block ${styles.title}`}>
        {answerCorrect ? "Dobrze się spisałeś!" : "Niestety nie udało się!"}
      </span>
    </p>
    <div className="flex flex-col justify-center text-center">
      <p className={`mt-4 ${styles.news}`}>„{challangeText}”</p>
      <p className="mt-2 text-lg font-bold">
        to
        <span className={isTrue ? styles.true : styles.false}>
          {isTrue ? " prawdziwa " : " fałszywa "}
        </span>
        informacja!
      </p>
    </div>
  </header>
);

Header.propTypes = {
  answerCorrect: PropTypes.bool.isRequired,
  isTrue: PropTypes.bool.isRequired,
  challangeText: PropTypes.string.isRequired,
};

export default Header;