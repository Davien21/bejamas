const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

const slice = (items, start, end) => {
  return items.slice(start, end);
};

function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  let endIndex = startIndex + pageSize;
  return items.slice(startIndex, endIndex);
}

const customLodash = { range, slice, paginate };

export default customLodash
