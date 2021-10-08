import React from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

function useProducts() {
  const { data, error } = useSWR("/api/products", fetcher);

  return {
    products: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useProducts };
