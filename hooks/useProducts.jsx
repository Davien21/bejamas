import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

function useProducts() {
  const { data, error } = useSWR("/api/products", fetcher);

  const cleanProducts = [];
  data?.data?.forEach((product) => {
    const id = product["ref"]["@ref"].id;
    cleanProducts.push({ id, ...product.data });
  });

  return {
    products: cleanProducts,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useProducts };
