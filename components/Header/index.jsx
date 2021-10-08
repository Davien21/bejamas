import React from "react";

import styles from "./header.module.css";
import { CartIcon, LogoIcon } from "../../assets/images";
import Cart from "../Cart";

function Header() {
  return (
    <div className={`${styles["container"]}`}>
      <div className="container">
        <div className="flex flex-wrap justify-between pt-6 pb-4 items-center relative">
          <div>
            <LogoIcon />
          </div>
          <div>
            <Cart />
          </div>
        </div>
        <hr className="hr-lg" />
        {/* <div></div> */}
      </div>
    </div>
  );
}

export { Header };
