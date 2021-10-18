import React from "react";
import { useFilterContext } from "../../contexts";
import RadioInput from "./RadioInput";

function RadioFilter() {
  const { activePriceFilter, setActivePriceFilter, priceFilters: filters } =
    useFilterContext();

  return (
    <>
      {filters.map((filter, filterIndex) => {
        return (
          <div key={`${filter}${filterIndex}`}>
            <RadioInput
              key={`${filter}${filterIndex}`}
              activeFilter={activePriceFilter}
              onFilter={setActivePriceFilter}
              filter={filter}
            />
          </div>
        );
      })}
    </>
  );
}

export default RadioFilter;
