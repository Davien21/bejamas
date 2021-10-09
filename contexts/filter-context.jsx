import { createContext, useContext, useState, useEffect } from "react";
import { getCategoryFilters, getPriceFilters } from "../utils";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [isCleared, setIsCleared] = useState(false);
  
  const allCategories = getCategoryFilters();
  const [categoryFilters, setCategoryFilters] = useState(allCategories);
  const [activePriceFilter, setActivePriceFilter] = useState("all");

  useEffect(() => {
    if (!isCleared) return;
    setCategoryFilters(allCategories);
    setActivePriceFilter("all");
    setIsCleared(false);
  }, [isCleared]);

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        activePriceFilter,
        setActivePriceFilter,
        priceFilters: getPriceFilters(),
        clearFilters: () => setIsCleared(true),
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
