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
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div
          onClick={() => onChangeOrder("asc")}
          className={`${styles["svg-container"]}`}
        >
          <AscendingIcon className="cursor-pointer " />
        </div>

        <div
          onClick={() => onChangeOrder("desc")}
          className={`${styles["svg-container"]}`}
        >
          <DescendingIcon className="cursor-pointer" />
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
