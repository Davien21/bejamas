import { useEffect } from "react";
import { AscendingIcon, CloseIcon, DescendingIcon } from "../../assets/images";
import { useFilterContext, useSortingContext } from "../../contexts";
import { Button } from "../Button";
import { MultipleFilter } from "../MultipleFilter";
import RadioFilter from "../RadioFilter";
import SelectBox from "../SelectBox";
import styles from "./filter-modal.module.css";
import { toast } from "react-toastify";

function FilterModal({ isOpen, onToggleModal }) {
  const {
    sortPath,
    setSortPath,
    sortOrder,
    setSortOrder,
    orderOptions,
    clearSorting,
  } = useSortingContext();

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

  let toggleOrderClass = (order) => {
    if (sortOrder !== order) return `${styles["svg-container"]}`;
    return `${styles["svg-container"]} ${styles["active"]}`;
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

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
            <button onClick={() => onToggleModal(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className={`${styles["sort-filter-container"]}`}>
            <div id="sorting" className={`mb-8`}>
              <p className="text-xl font-semibold mb-6">Sorting</p>
              <div className="flex items-center mb-4">
                <span className={`${styles["grey-font"]} mr-6 app-text-grey`}>
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
                <div className="ml-5 flex items-center">
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
              </div>
            </div>
            <div id="filtering">
              <p className="text-xl font-semibold mb-6">Filter</p>
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
                onToggleModal(false);
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
