import React from "react";
import { AscendingIcon, DescendingIcon } from "../../assets/images";
import SelectBox from "../SelectBox";

import styles from "./toggle-filter.module.css";

function ToggleFilter({
  sortPath,
  onChangePath,
  options,
  sortOrder,
  onChangeOrder,
}) {
  let toggleOrderClass = (order) => {
    if (sortOrder !== order) return `${styles["svg-container"]}`;
    return `${styles["svg-container"]} ${styles["active"]}`;
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div
          onClick={() => onChangeOrder("asc")}
          className={toggleOrderClass("asc")}
        >
          <AscendingIcon />
        </div>

        <div
          onClick={() => onChangeOrder("desc")}
          className={toggleOrderClass("desc")}
        >
          <DescendingIcon />
        </div>
      </div>
      <div className="flex items-center">
        <span className={`${styles["grey-font"]} mx-2`}>Sort By</span>
        <div>
          <SelectBox
            selectedOption={sortPath}
            onChangeOption={onChangePath}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export { ToggleFilter };
