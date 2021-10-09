import React, { useEffect } from "react";
import { AscendingIcon, CloseIcon, DescendingIcon } from "../../assets/images";
import { useFilterContext, useSortingContext } from "../../contexts";
import { MultipleFilter } from "../MultipleFilter";
import RadioFilter from "../RadioFilter";
import SelectBox from "../SelectBox";
import styles from "./filter-modal.module.css";

function FilterModal({ isOpen, onToggleModal }) {
  const { sortPath, setSortPath, orderOptions } = useSortingContext();

  const {
    categoryFilters,
    setCategoryFilters,
    activePriceFilter,
    setActivePriceFilter,
    priceFilters,
  } = useFilterContext();

  let containerClass = `${styles["container"]} `;
  if (isOpen) containerClass += `${styles["active"]}`;

  return (
    <div className={containerClass} onClick={() => onToggleModal(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles["modal"]} shadow-lg p-5`}
      >
        <div className={`${styles["close"]} flex justify-end w-full`}>
          <CloseIcon onClick={() => onToggleModal(false)} />
        </div>
        <div id="sorting" className="mb-8">
          <p className="text-xl font-semibold mb-2">Sorting</p>
          <div className="flex items-center mb-2">
            <span className={`${styles["grey-font"]} mr-4 app-text-grey`}>
              Sort By
            </span>
            <div>
              <SelectBox
                selectedOption={sortPath}
                onChangeOption={setSortPath}
                options={orderOptions}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-3 app-text-grey">Order</span>
            <div className="ml-auto flex items-center gap-3">
              <div className={`${styles["svg-container"]}`}>
                <AscendingIcon
                  onClick={() => onChangeOrder("asc")}
                  className="cursor-pointer "
                />
              </div>

              <div className={`${styles["svg-container"]}`}>
                <DescendingIcon
                  onClick={() => onChangeOrder("desc")}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="filtering">
          <p className="text-xl font-semibold mb-2">Filter</p>
          <div id={`${styles["filters"]}`} className="col-span-1">
            <p className="font-semibold mb-6 app-text-grey">Category</p>

            <MultipleFilter
              title="category"
              filters={categoryFilters}
              onFilter={setCategoryFilters}
            />
            <p className="font-semibold mb-6 app-text-grey">Price</p>

            <RadioFilter
              activeFilter={activePriceFilter}
              onFilter={setActivePriceFilter}
              title="Price"
              filters={priceFilters}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
