const getproducts = async (basePath) => {
  const url = basePath + "/api/products";
  let data = await fetch(url);
  data = await data.json();

  return data;
};

export { getproducts };
