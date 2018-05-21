import React from "react";
import PropTypes from "prop-types";

import styles from "./style.sass";

const Container = ({ beforeMain, main, afterMain }) => (
  <div className={styles.container}>
    {beforeMain}

    <main className={styles.main}>
      {main}
    </main>

    {afterMain}
  </div>
);

Container.propTypes = {
  beforeMain: PropTypes.node,
  main: PropTypes.node,
  afterMain: PropTypes.node,
};

Container.defaultProps = {
  beforeMain: null,
  main: null,
  afterMain: null,
};

export default Container;
