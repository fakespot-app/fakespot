import React from "react";
import PropTypes from "prop-types";

import Badge from "./Badge";
import styles from "./styles.sass";

export default class Badges extends React.Component {
  static propTypes = {
    badgesCollected: PropTypes.array.isRequired,
    badges: PropTypes.array.isRequired,
  }

  constructor(props) {
    super();

    this.initialBadges = [...props.badgesCollected];
  }

  render() {
    console.log(this.props.badgesCollected);

    const badges = this.props.badges.map(badge =>
      (
        <Badge
          key={`badge-${badge.name}`}
          badge={badge}
          badgesCollected={this.props.badgesCollected}
          initialBadges={this.initialBadges}
        />
      ),
    );
    return (
      <main className={`${styles.badges} flex items-start`}>
        {badges}
      </main>
    );
  }
}
