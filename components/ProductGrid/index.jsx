import React, { useState } from "react";
import { useProducts } from "../../hooks";
import { ProductCard } from "../ProductCard";
import Pagination from "../Pagination";

import { paginate, sortByCategory, sortByPrice } from "../../utils";
import styles from "./product-grid.module.css";

function ProductGrid({ categoryFilters, activePriceFilter }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { products, isError, isLoading } = useProducts();

  let sortedProducts = sortByCategory(categoryFilters, products);
  // sortedProducts = sortByPrice(activePriceFilter, products);

  const finalProducts = paginate(sortedProducts, currentPage, 6);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 md:h-full">
      {isLoading && <div>Loading...</div>}
      {products && finalProducts.length == 0 && (
        <div>There are no products</div>
      )}
      {finalProducts?.map((product) => (
        <div key={product["ref"]["@ref"].id} className="">
          <ProductCard
            product={{ id: product["ref"]["@ref"].id, ...product.data }}
          />
        </div>
      ))}
      <div className="flex flex-col justify-end mx-auto mb-10 md:col-span-3">
        <Pagination
          itemsCount={products?.length}
          pageSize={6}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default ProductGrid;
