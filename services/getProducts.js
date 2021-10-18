const getproducts = async () => {
  const url = process.env.basePath + "/api/products";
  let data = await fetch(url);
  data = await data.json();

  return data;
};

export { getproducts };
