import React from "react";

import styles from "./button.module.css";

function Button({ type, text, onClick, ...rest }) {
  if (!type) type = "primary";

  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${styles["container"]} ${styles[type]}`}
    >
      {text}
    </button>
  );
}

export { Button };
