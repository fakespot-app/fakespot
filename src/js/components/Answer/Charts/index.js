import React from "react";
import PropTypes from "prop-types";
import chart from "assets/images/chart.png";

import styles from "./styles.sass";


const isTrue = false;

const Charts = ({ globalAnswers }) => {
  const percentage = `${Math.round(globalAnswers.correct / (globalAnswers.correct + globalAnswers.incorrect) * 100)}%`;

  return (
    <section className={`flex ${styles.charts}`}>
      <div className={styles.chart}>
        <img src={chart} alt="chart" />
        <p>{percentage} graczy oceniło news jako {isTrue ? "prawdziwy" : "fałszywy"}</p>
      </div>
      <div className={styles.chart}>
        <img src={chart} alt="chart" />
        <p>60% graczy wskazało to<br />źródło co Ty</p>
      </div>
    </section>
  );
};

Charts.propTypes = {
  globalAnswers: PropTypes.object.isRequired,
};

export default Charts;
