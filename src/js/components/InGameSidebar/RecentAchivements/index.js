import React from "react";
import PropTypes from "prop-types";
import Label from "../Label/";


import styles from "./styles.sass";

const createImageBadges = badges => badges.map(b =>
  <img src={b.src} alt="" key={`sidebar-badge-${b.achivementId}`} />,
);

const RecentAchivements = ({ recentAchivements }) => (
  <div className={styles.container}>
    <Label className={styles.header}>
      <>
        Ostatnie osiągnięcia
      </>
    </Label>

    <div className={styles.badges}>
      { createImageBadges(recentAchivements) }
    </div>
  </div>
);

RecentAchivements.propTypes = {
  recentAchivements: PropTypes.arrayOf(PropTypes.shape({
    achivementId: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    collected: PropTypes.number.isRequired,
  })).isRequired,
};

export default RecentAchivements;