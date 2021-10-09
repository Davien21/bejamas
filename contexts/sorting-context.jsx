import { createContext, useContext, useState } from "react";

const SortingContext = createContext();

export function SortingProvider({ children }) {
  const [sortOrder, setSortOrder] = useState("price");
  const [sortPath, setSortPath] = useState("asc");
  const [orderOptions] = useState(["price", "name"]);

  return (
    <SortingContext.Provider
      value={{ sortOrder, setSortOrder, sortPath, setSortPath, orderOptions }}
    >
      {children}
    </SortingContext.Provider>
  );
}

export function useSortingContext() {
  const context = useContext(SortingContext);

  if (!context) throw new Error("useSort must be used inside a `SortProvider`");

  return context;
}
