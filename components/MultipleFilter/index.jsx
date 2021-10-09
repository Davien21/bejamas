import React from "react";
import MultipleInput from "./MultipleInput";
import styles from "./multiple-filter.module.css";

function MultipleFilter({ title, filters, onFilter }) {
  return (
    <>
      {filters.map((filter, filterIndex) => {
        const label = Object.keys(filter)[0];
        return (
          <div key={`${filter}${filterIndex}`}>
            <MultipleInput
              key={`${filter}${filterIndex}`}
              allFilters={filters}
              onFilter={onFilter}
              filter={filter}
              label={label}
              filterIndex={filterIndex}
            />
          </div>
        );
      })}
    </>
  );
}

export { MultipleFilter };
