import React from "react";
import Label from "../Label";

import styles from "./styles.sass";

const Header = ({ quote }) => (
  <>
    <header className={styles.container}>
      <Label className={styles.label}>
        <>
          1. Wykorzystując zasoby internetu dowiedz się czy poniższy news jest prawdziwy.
        </>
      </Label>
      <blockquote><span>{quote}</span></blockquote>
    </header>
    <div className={styles.divider} />
  </>
);

export default Header;