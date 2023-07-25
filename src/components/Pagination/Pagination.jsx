import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "../Pagination/Pagination.css"

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage, handlePageClick }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <div className="pagination_status">Pages {currentPage} of {totalPages}</div>
      <button onClick={handlePrevPage} disabled={currentPage === 1} className="pagination_button">
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      {pageNumbers.slice(currentPage - 1, currentPage + 19).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`pagination_button ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPages} className="pagination_button">
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
};

export default Pagination;
