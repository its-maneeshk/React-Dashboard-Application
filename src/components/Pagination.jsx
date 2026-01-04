function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        className="px-3 py-1 bg-gray-800 text-white rounded disabled:bg-gray-400"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="px-3 py-1">{currentPage} / {totalPages}</span>
      <button
        className="px-3 py-1 bg-gray-800 text-white rounded disabled:bg-gray-400"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
