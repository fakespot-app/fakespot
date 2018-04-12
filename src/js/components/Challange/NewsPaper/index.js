import React from "react";
import newspaperImg from "assets/images/newspaper.png";

import styles from "./style.sass";

const NewsPaper = ({ children }) => (<div className={styles.newsPaper}>{children}<img src={newspaperImg} alt="" /></div>);
export default NewsPaper;
