import React, { useState } from "react";
import { FilterIcon } from "../../assets/images";
import { getCategoryFilters, getPriceFilters } from "../../utils";
import { MultipleFilter } from "../MultipleFilter";

import ProductGrid from "../ProductGrid";
import RadioFilter from "../RadioFilter";
import { ToggleFilter } from "../ToggleFilter";
import styles from "./products.module.css";

function Products(props) {
  const [categoryFilters, setCategoryFilters] = useState(getCategoryFilters());
  const [priceFilters, setPriceFilters] = useState(getPriceFilters());

  let activePriceFilter;
  activePriceFilter = priceFilters.forEach((filter) => {
    const name = Object.values(filter)[0];
    console.log(filter, filter[name]);
    if (filter[name] === true) activePriceFilter = name;
  });
  console.log(priceFilters, activePriceFilter);
  return (
    <div className={`${styles["container"]} my-5`}>
      <div className="flex justify-between gap-1 items-center mb-10">
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
      <div className="grid grid-cols-5 gap-x-8">
        <div id={`${styles["filters"]}`} className="hidden md:block col-span-1">
          <MultipleFilter
            title="category"
            filters={categoryFilters}
            onFilter={setCategoryFilters}
          />
          <RadioFilter
            title="Price"
            filters={priceFilters}
            onFilter={setPriceFilters}
          />
        </div>
        <div id="product-grid" className="col-span-5 md:col-span-4">
          <ProductGrid
            categoryFilters={categoryFilters}
            activePriceFilter={activePriceFilter}
          />
        </div>
      </div>
      
    </div>
  );
}

export { Products };
