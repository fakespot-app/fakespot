import React from "react";
import { NavLink } from "react-router-dom";

import Icon from "components/Icon";

import styles from "./styles.sass";

export default class MenuBar extends React.Component {
  render() {
    return (
      <aside className={styles.container}>
        <header className={styles.logoContainer}>
          <div className={styles.logo}>
            <span>FAKE</span>
            <span>SPOT</span>
          </div>


        </header>
        <nav className={styles.menu}>
          <ul>
            <li>
              <NavLink to="/singleplayer" activeClassName={styles.active}>
                <Icon>person_outline</Icon><span>Pojedynczy gracz</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/multiplayer">
                <Icon>people_outline</Icon><span>Wielu graczy</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/stats">
                <Icon>trending_up</Icon><span>Statystyki</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <Icon>account_circle</Icon><span>Profil</span>
              </NavLink>
            </li>

            <div className={styles.divider} />

            <li>
              <NavLink to="/logout">
                <Icon>chevron_left</Icon><span>Wyloguj</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}