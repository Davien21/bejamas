import React from "react";
import RadioInput from "./RadioInput";

function RadioFilter({ activeFilter, title, filters, onFilter }) {
  return (
    <>
      <p className="font-semibold mb-6 text-xl capitalize">{title}</p>
      {filters.map((filter, filterIndex) => {
        return (
          <div key={`${filter}${filterIndex}`}>
            <RadioInput
              key={`${filter}${filterIndex}`}
              activeFilter={activeFilter}
              onFilter={onFilter}
              filter={filter}
            />
          </div>
        );
      })}
    </>
  );
}

export default RadioFilter;
