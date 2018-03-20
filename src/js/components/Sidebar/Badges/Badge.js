import React from "react";
import PropTypes from "prop-types";

import AnimateCC from "react-adobe-animate";

import styles from "./styles.sass";

const Badge = ({ badge, badgesCollected, initialBadges }) => {
  let isLocked = true;
  let wasInitiallyOpen = false;

  if (badgesCollected.indexOf(badge.id) >= 0) {
    isLocked = false;
  }

  if (initialBadges.indexOf(badge.id) >= 0) {
    wasInitiallyOpen = true;
  }

  return (
    <div
      key={`badge-${badge.name}`}
      className={`${styles.badge}`}
      title={badge.name}
    >
      <img
        key="unlocked"
        src={badge.img}
        alt={`Odblokowane osiągnięcie – ${badge.name}`}
      />

      { !wasInitiallyOpen ?
        (
          <AnimateCC
            fileName="lock"
            composition="842516E249BD4E919481E0E5D20ACD2C"
            paused={isLocked}
            style={{ position: "absolute" }}
          />
        ) : null }
    </div>
  );
};

Badge.propTypes = {
  badge: PropTypes.object.isRequired,
  badgesCollected: PropTypes.array.isRequired,
  initialBadges: PropTypes.array.isRequired,
};

export default Badge;