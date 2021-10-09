import React, { useEffect } from "react";
import { AscendingIcon, CloseIcon, DescendingIcon } from "../../assets/images";
import { useFilterContext, useSortingContext } from "../../contexts";
import { Button } from "../Button";
import { MultipleFilter } from "../MultipleFilter";
import RadioFilter from "../RadioFilter";
import SelectBox from "../SelectBox";
import styles from "./filter-modal.module.css";
import { toast } from "react-toastify";

function FilterModal({ isOpen, onToggleModal }) {
  const { sortPath, setSortPath, orderOptions, clearSorting } =
    useSortingContext();

  const {
    categoryFilters,
    setCategoryFilters,
    activePriceFilter,
    setActivePriceFilter,
    priceFilters,
    clearFilters,
  } = useFilterContext();

  let containerClass = `${styles["container"]} `;
  if (isOpen) containerClass += `${styles["active"]}`;

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "auto";
  // }, [isOpen]);

  return (
    <>
      <div className={containerClass} onClick={() => onToggleModal(false)}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${styles["modal"]} shadow-lg p-5`}
        >
          <div
            className={`${styles["close"]} inline-block left-full justify-end`}
          >
            <CloseIcon onClick={() => onToggleModal(false)} />
          </div>
          <div className={`${styles["sort-filter-container"]}`}>
            <div id="sorting" className={`mb-8`}>
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
                <div className="ml-auto flex items-center">
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
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${styles["options"]} flex gap-8 p-5 flex-wrap`}
        >
          <div className="flex-1">
            <Button
              onClick={() => {
                clearSorting();
                clearFilters();
                toast.error("Your Filters Were Cleared");
              }}
              type="secondary"
              text="Clear"
            />
          </div>
          <div className="flex-1">
            <Button
              onClick={() => {
                toast.success("Your Settings are saved");
                onToggleModal(false)
              }}
              text="Save"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterModal;
