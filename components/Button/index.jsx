import React from "react";

import styles from "./button.module.css";

function Button({ type, text, onClick }) {
  if (!type) type = "primary";

  return (
    <button
      onClick={onClick}
      className={`${styles["container"]} ${styles[type]}`}
    >
      {text}
    </button>
  );
}

export { Button };
