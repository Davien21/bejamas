import React from "react";
import { FilterIcon } from "../../assets/images";
import { CheckboxFilter } from "../CheckboxFilter";
import { ToggleFilter } from "../ToggleFilter";
import styles from "./products.module.css";

function Products(props) {
  return (
    <div className={`${styles["container"]} my-5`}>
      <div className="flex justify-between gap-1 items-center">
        <div className="text-xl md:text-2xl flex flex-wrap">
          <span className="font-semibold">Photography</span>
          <span className="mx-2">/</span>
          <span className={`${styles["category"]}`}>Premium Photos</span>
        </div>
        <div id="filters">
          <div className="hidden md:block">
            <ToggleFilter />
          </div>
          <div className="md:hidden">
            <FilterIcon />
          </div>
        </div>
      </div>
      <div>
        <div id="checkbox-filter">
          <CheckboxFilter />
        </div>
        <div id="product-grid">
          
        </div>
      </div>
    </div>
  );
}

export { Products };
