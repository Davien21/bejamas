import React from "react";
import {
  AscendingIcon,
  DescendingIcon,
  DropDownIcon,
} from "../../assets/images";

import styles from "./toggle-filter.module.css";

function ToggleFilter(props) {
  return (
    <div className="flex items-center">
      <div className="flex gap-1">
        <AscendingIcon className="cursor-pointer"/>
        <DescendingIcon className="cursor-pointer"/>
      </div>
      <span className={`${styles["grey-font"]} ml-2`}>Sort By</span>
      <span className="mx-3">Price</span>
      <div>
        <DropDownIcon />
      </div>
    </div>
  );
}

export { ToggleFilter };
