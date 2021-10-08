function getCategoryFilters() {
  return [
    { people: false },
    { premium: false },
    { pets: false },
    { food: false },
    { landmarks: false },
    { cities: false },
    { nature: false },
  ];
}

function getPriceFilters() {
  return [
    { "lower than $20": false },
    { "$20 - $100": false },
    { "$100 - $200": false },
    { "more than $200": false },
  ];
}

export { getCategoryFilters, getPriceFilters };
