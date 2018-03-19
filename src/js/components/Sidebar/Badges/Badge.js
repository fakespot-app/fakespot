import React from "react";

import styles from "./styles.sass";

const Badge = ({ badge, badgesCollected, initialBadges }) => {
  let isLocked = true;
  const imgSrc = "/badges/lock.png";

  if (badgesCollected.indexOf(badge.id) >= 0) {
    isLocked = false;
  }

  if (isLocked) {
    return (
      <div
        key={`badge-${badge.name}`}
        className={`${styles.badge}`}
      >
        <img
          key="preload"
          src="/badges/lock.gif"
          alt={`Zablokowane osiągnięcie – ${badge.name}`}
          title={badge.name}
        />
        <img
          key="locked"
          src="/badges/lock.png"
          alt={`Odblokowane osiągnięcie – ${badge.name}`}
          title={badge.name}
        />
      </div>
    );
  }


  return (
    <div
      key={`badge-${badge.name}`}
      className={`${styles.badge}`}
    >
      {/* <img
        key="unlocked"
        src={badge.img}
        alt={`Odblokowane osiągnięcie – ${badge.name}`}
        title={badge.name}
      /> */}
      <img
        key="unlocking"
        src="/badges/lock.gif"
        alt={`Zablokowane osiągnięcie – ${badge.name}`}
        title={badge.name}
      />
    </div>
  );
};

export default Badge;