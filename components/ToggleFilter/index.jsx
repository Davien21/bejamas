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
      <div className="flex gap-2">
        <AscendingIcon
          onClick={() => onChangeOrder("asc")}
          className="cursor-pointer"
        />
        <DescendingIcon
          onClick={() => onChangeOrder("desc")}
          className="cursor-pointer"
        />
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
