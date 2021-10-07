import React from "react";

import styles from "./button.module.css";

function Button({ type, text }) {
  if (!type) type = "primary";

  return (
    // <div>
    <button className={`${styles["container"]} ${styles[type]}`}>{text}</button>
    // </div>
  );
}

export { Button };
