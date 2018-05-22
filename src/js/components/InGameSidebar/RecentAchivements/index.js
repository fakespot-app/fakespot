import React from "react";
import PropTypes from "prop-types";

import Tooltip from "components/Tooltip";

import Label from "../Label/";

import styles from "./styles.sass";

const createImageBadges = badges => badges.map(b =>
  (
    <Tooltip
      key={`sidebar-badge-${b.achivementId}`}
      className={styles.imageContainer}
      left
      text={
        <>
          <p><strong>{b.title}</strong></p>
          <p>{b.description}</p>
        </>
      }
    >
      <img src={b.src} alt="" />
    </Tooltip>
  ),
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    collected: PropTypes.number.isRequired,
  })).isRequired,
};

export default RecentAchivements;