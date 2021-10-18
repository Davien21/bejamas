import React, { useState } from "react";
import { useProducts } from "../../hooks";
import { ProductCard } from "../ProductCard";
import Pagination from "../Pagination";

import { sortByCategory, sortByOrderAndPath, sortByPrice } from "../../utils";
import { Loader } from "../Loader";
import { useFilterContext, useSortingContext } from "../../contexts";
import _ from "../../utils/custom-lodash";

function ProductGrid() {
  const { sortOrder, sortPath } = useSortingContext();
  const { categoryFilters, activePriceFilter } = useFilterContext();
  const [currentPage, setCurrentPage] = useState(1);

  const { products, isError, isLoading } = useProducts();

  let sortedProducts = sortByCategory(categoryFilters, products);
  sortedProducts = sortByPrice(activePriceFilter, sortedProducts);

  sortedProducts = sortByOrderAndPath(sortedProducts, sortOrder, sortPath);

  const finalProducts = _.paginate(sortedProducts, currentPage, 6);

  return (
    <>
      {isError && <div className="text-2xl">There was an error 😭...</div>}
      <Loader isLoading={isLoading} />
      {!isLoading && !isError && finalProducts.length == 0 && (
        <div className="text-2xl">There are no available products</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 md:h-full">
        {finalProducts?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
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
