import React from "react";
import classNameFn from "utils/className";

import styles from "./styles.sass";

const Button = ({
  children, className, raised, ...rest
}) => (
  <button
    className={classNameFn(
      styles.button,
      className,
      raised ? styles.buttonRaised : "",
    )}
    {...rest}
  >{ children }
  </button>
);

export default Button;