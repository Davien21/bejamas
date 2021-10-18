import React, { useState } from "react";
import { FilterIcon } from "../../assets/images";
import FilterModal from "../FilterModal";
import { MultipleFilter } from "../MultipleFilter";

import ProductGrid from "../ProductGrid";
import RadioFilter from "../RadioFilter";
import { ToggleFilter } from "../ToggleFilter";
import styles from "./products.module.css";

function Products(props) {
  const [filterModal, toggleFilterModal] = useState(false);

  return (
    <div className={`${styles["container"]} my-5`}>
      <div className="flex justify-between gap-1 items-center mb-10">
        <div className="text-xl md:text-2xl flex flex-wrap">
          <span className="font-semibold">Photography</span>
          <span className="mx-2">/</span>
          <span className={`${styles["category"]}`}>Premium Photos</span>
        </div>
        <div id={`${styles["sorters"]}`}>
          <div className="hidden md:block">
            <ToggleFilter />
          </div>
          <div className="md:hidden">
            <FilterIcon
              className="cursor-pointer"
              onClick={() => toggleFilterModal(!filterModal)}
            />
            <FilterModal
              isOpen={filterModal}
              onToggleModal={toggleFilterModal}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 md:gap-x-8">
        <div id={`${styles["filters"]}`} className="hidden md:block col-span-1">
          <p className="font-semibold mb-6 text-xl">Category</p>
          <MultipleFilter />
          <p className="font-semibold mb-6 text-xl ">Price</p>
          <RadioFilter />
        </div>
        <div id="product-grid" className="col-span-5 md:col-span-4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

export { Products };
