function sortByPrice(filter, products) {
  if (filter == "lower than $20")
    return products.filter((product) => product.price < 20);

  if (filter == "$20 - $100")
    return products.filter(
      (product) => product.price > 20 && product.price < 100
    );

  if (filter == "$100 - $200")
    return products.filter(
      (product) => product.price > 100 && product.price < 200
    );

  if (filter == "more than $200")
    return products.filter((product) => product.price > 200);

  return products;
}

function sortByCategory(filters, products) {
  const categories = [];
  filters.forEach((category) => {
    const field = Object.keys(category)[0];
    if (category[field] === true) categories.push(field);
  });

  let sortedProducts = products;

  if (categories.length > 0) {
    sortedProducts = products?.filter((product) =>
      categories.includes(product.category)
    );
  }

  return sortedProducts;
}

export { sortByPrice, sortByCategory };
