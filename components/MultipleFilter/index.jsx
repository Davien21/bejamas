import { useFilterContext } from "../../contexts";
import MultipleInput from "./MultipleInput";

function MultipleFilter() {
  const { categoryFilters: filters, setCategoryFilters } = useFilterContext();
  return (
    <>
      {filters.map((filter, filterIndex) => {
        const label = Object.keys(filter)[0];
        return (
          <div key={`${filter}${filterIndex}`}>
            <MultipleInput
              key={`${filter}${filterIndex}`}
              allFilters={filters}
              onFilter={setCategoryFilters}
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
