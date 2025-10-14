const Pagination = ({
  totalProducts,
  ProductPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / ProductPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center mt-12">
      <nav className="flex items-center space-x-2" aria-label="Pagination">
        <button
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          href="#"
          aria-label=" Go to Previous page"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pages.map((page, index) => (
          <button
            key={index}
            className={`px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 hidden md:block
      ${page === currentPage ? "bg-primary text-white" : " "}`}
            href="#"
            onClick={() => setCurrentPage(page)}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        ))}

        <button
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          href="#"
          aria-label="Go to next page"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pages.length}
        >
          Next
        </button>
      </nav>
    </div>
  );
};
export default Pagination;
