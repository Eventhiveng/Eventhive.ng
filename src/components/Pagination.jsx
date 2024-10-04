const Pagination = ({ currentPage, totalItems, itemsPerPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <ul>
        {/* First Page Button */}
        {currentPage !== 1 && (
          <li>
            <button onClick={() => paginate(1)} className="page-link">
              1
            </button>
          </li>
        )}

        {/* Previous Page Button */}
        {currentPage > 2 && (
          <li>
            <button onClick={handlePrevPage} className="page-link">
              {currentPage - 1}
            </button>
          </li>
        )}

        {/* Current Page Button */}
        <li className="active">
          <button className="page-link">{currentPage}</button>
        </li>

        {/* Next Page Button */}
        {currentPage < totalPages - 1 && (
          <li>
            <button onClick={handleNextPage} className="page-link">
              {currentPage + 1}
            </button>
          </li>
        )}

        {/* Last Page Button */}
        {currentPage !== totalPages && (
          <li>
            <button onClick={() => paginate(totalPages)} className="page-link">
              {totalPages}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
// const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
//   const pageNumbers = [];

//   // Calculate total pages
//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div>
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li
//             key={number}
//             ${currentPage === number ? "active" : ""}`}
//           >
//             <button onClick={() => paginate(number)} className="page-link">
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;

