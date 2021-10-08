function sortByPrice(filter, products) {
  const sortedProducts = {
    "lower than $20": () => products.map((product) => product.price < 20),
    "$20 - $100": () =>
      products.map((product) => product.price > 20 && product.price < 100),
    "$100 - $200": () =>
      products.map((product) => product.price > 100 && product.price < 200),
    "more than $200": () => products.map((product) => product.price > 200),
  };
  console.log(sortedProducts[filter], filter)
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
    categories.includes(product.data.category)
    );
  }
  
  console.log(sortedProducts)
  return sortedProducts
}

export { sortByPrice, sortByCategory };
