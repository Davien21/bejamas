import { createContext, useContext, useState } from "react";
import { getCategoryFilters, getPriceFilters } from "../utils";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [categoryFilters, setCategoryFilters] = useState(getCategoryFilters());
  const [activePriceFilter, setActivePriceFilter] = useState("All");

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        activePriceFilter,
        setActivePriceFilter,
        priceFilters: getPriceFilters(),
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context)
    throw new Error("useFilter must be used inside a `FilterProvider`");

  return context;
}
