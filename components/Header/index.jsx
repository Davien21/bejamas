import React from "react";

import styles from "./header.module.css";
import { CartIcon, LogoIcon } from "../../assets/images";

function Header(props) {
  return (
    <div className={`${styles["container"]}`}>
      <div className="container">
        <div className="flex flex-wrap justify-between pt-6 pb-4 items-center">
          <div>
            <LogoIcon />
          </div>
          <div>
            <CartIcon />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export { Header };
