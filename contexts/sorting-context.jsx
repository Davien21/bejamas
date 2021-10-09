import { createContext, useContext, useState, useEffect } from "react";

const SortingContext = createContext();

export function SortingProvider({ children }) {
  const [isCleared, setIsCleared] = useState(false);
  
  const [sortOrder, setSortOrder] = useState("price");
  const [sortPath, setSortPath] = useState("asc");
  const [orderOptions] = useState(["price", "name"]);

  useEffect(() => {
    if (!isCleared) return;
    setSortOrder("price");
    setSortPath("asc");
    setIsCleared(false);
  }, [isCleared]);

  return (
    <SortingContext.Provider
      value={{ sortOrder, setSortOrder, sortPath, setSortPath, orderOptions, clearSorting: () => setIsCleared(true) }}
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
