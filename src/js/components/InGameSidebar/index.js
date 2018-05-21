import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

// import Badges from "./Badges/";
// import Avatar from "./Avatar/";


export default class InGameSidebar extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    badges: PropTypes.array.isRequired,
  }

  render() {
    const { currentLevel, levelPoints } = this.props;
    return (
      <aside className={`${styles.sidebar}`}>
        <p>{ currentLevel }, {levelPoints}</p>
        {/* <header>
          <p className="text-center">Wynik</p>
          <p className={`${styles.scoreText} text-center`}>{this.props.user.points}</p>
        </header>
        <div className={styles.divider} />
        <main>
          <p className="text-center">Osiągnięcia</p>
          <Badges
            badges={this.props.badges}
            badgesCollected={this.props.user.badgesCollected}
          />
        </main>
        <Avatar
          avatar={this.props.user.avatar}
        /> */}
      </aside>
    );
  }
}
