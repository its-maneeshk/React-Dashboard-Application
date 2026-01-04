// Simple pagination helper
export const paginate = (data, page, perPage) =>
  data.slice((page - 1) * perPage, page * perPage);
