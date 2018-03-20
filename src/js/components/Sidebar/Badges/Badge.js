import React from "react";
import AnimateCC from "../../AnimateCC/";

import styles from "./styles.sass";

const Badge = ({ badge, badgesCollected, initialBadges }) => {
  let isLocked = true;

  if (badgesCollected.indexOf(badge.id) >= 0) {
    isLocked = false;
  }

  return (
    <div
      key={`badge-${badge.name}`}
      className={`${styles.badge}`}
    >
      <img
        key="unlocked"
        src={badge.img}
        alt={`Odblokowane osiągnięcie – ${badge.name}`}
        title={badge.name}
      />

      <AnimateCC
        fileName="lock"
        composition="842516E249BD4E919481E0E5D20ACD2C"
        paused={isLocked}
      />
    </div>
  );
};

export default Badge;