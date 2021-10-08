import _ from "lodash";
import React, { useState } from "react";
import { useProducts } from "../../hooks";
import { ProductCard } from "../ProductCard";
import Pagination from "../Pagination";

import { paginate, sortByCategory, sortByPrice } from "../../utils";
import styles from "./product-grid.module.css";

function ProductGrid({
  categoryFilters,
  activePriceFilter,
  sortPath,
  sortOrder,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  let { products, isError, isLoading } = useProducts();

  let sortedProducts = sortByCategory(categoryFilters, products);
  sortedProducts = sortByPrice(activePriceFilter, sortedProducts);

  sortedProducts = _.orderBy(sortedProducts, [sortPath], [sortOrder]);

  const finalProducts = paginate(sortedProducts, currentPage, 6);
  return (
    <>
      {isError && <div className="text-2xl">There was an error 😭...</div>}
      {isLoading && <div className="text-2xl">Loading...</div>}
      {!isLoading && !isError && products.length == 0 && (
        <div className="text-2xl">There are no such products</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 md:h-full">
        {finalProducts?.map((product) => {
          return (
            <div key={product.id} className="">
              <ProductCard product={product} />
            </div>
          );
        })}
        <div className="flex flex-col justify-end mx-auto mb-10 md:col-span-3">
          <Pagination
            itemsCount={sortedProducts?.length}
            pageSize={6}
            onPageChange={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}

export default ProductGrid;
