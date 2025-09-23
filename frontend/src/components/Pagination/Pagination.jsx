const Pagination = () => {
  return (
    <div className="flex justify-center mt-12">
      <nav className="flex items-center space-x-2" aria-label="Pagination">
        <a
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          href="#"
          aria-label=" Go to Previous page"
        >
          Previous
        </a>
        <a
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          href="#"
        >
          1
        </a>
        <a
          className="px-4 py-2 text-white bg-primary border border-primary rounded-md"
          href="#"
          aria-current="page"
        >
          2
        </a>
        <a
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          href="#"
        >
          3
        </a>
        <a
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          href="#"
        >
          4
        </a>
        <a
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          href="#"
        >
          5
        </a>
        <a
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          href="#"
          aria-label="Go to next page"
        >
          Next
        </a>
      </nav>
    </div>
  );
};
export default Pagination;
