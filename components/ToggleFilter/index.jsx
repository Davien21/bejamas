import React from "react";
import { AscendingIcon, DescendingIcon } from "../../assets/images";
import { useSortingContext } from "../../contexts";
import SelectBox from "../SelectBox";

import styles from "./toggle-filter.module.css";

function ToggleFilter() {
  const { sortOrder, setSortOrder, sortPath, setSortPath, orderOptions } =
    useSortingContext();

  let toggleOrderClass = (order) => {
    if (sortOrder !== order) return `${styles["svg-container"]}`;
    return `${styles["svg-container"]} ${styles["active"]}`;
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <button
          aria-label="Sort in Ascending Order"
          onClick={() => setSortOrder("asc")}
          className={toggleOrderClass("asc")}
        >
          <AscendingIcon />
        </button>

        <button
          aria-label="Sort in Ascending Order"
          onClick={() => setSortOrder("desc")}
          className={toggleOrderClass("desc")}
        >
          <DescendingIcon />
        </button>
      </div>
      <div className="flex items-center">
        <span className={`${styles["grey-font"]} mx-2`}>Sort By</span>
        <div>
          <SelectBox
            selectedOption={sortPath}
            onChangeOption={setSortPath}
            options={orderOptions}
          />
        </div>
      </div>
    </div>
  );
}

export { ToggleFilter };
