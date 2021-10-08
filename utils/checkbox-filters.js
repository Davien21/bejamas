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
  return ["lower than $20", "$20 - $100", "$100 - $200", "more than $200"];
}

export { getCategoryFilters, getPriceFilters };
