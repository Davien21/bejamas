import React from "react";
import RadioInput from './RadioInput';

function RadioFilter({ title, filters, onFilter }) {
  return (
    <>
      <p className="font-semibold mb-6 text-xl capitalize">{title}</p>
      {filters.map((filter, filterIndex) => {
        const label = Object.keys(filter)[0];
        return (
          <div key={`${filter}${filterIndex}`}>
            <RadioInput
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

export default RadioFilter;
