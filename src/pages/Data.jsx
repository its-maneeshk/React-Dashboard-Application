import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/dataSlice.js";
import Table from "../components/Table.jsx";
import Pagination from "../components/Pagination.jsx";
import { paginate } from "../utils/helpers.js";

function Data() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.data);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = paginate(filteredProducts, currentPage, itemsPerPage);

  if (loading) return <p className="text-gray-600">Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      {/* Search Box */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          className="px-4 py-2 border border-gray-300 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p className="text-gray-500 text-sm sm:text-base">
          Showing {displayedProducts.length} of {filteredProducts.length} results
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <div className="min-w-[600px] p-4">
          <Table data={displayedProducts} />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Data;
