import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "../Pagination/Pagination.css"

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage, handlePageClick }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {/* KONTAINER PAGNATION */}
      <div className="wrap_pagination">
      <div className="pagination_status">Pages {currentPage} of {totalPages}</div>

      <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1} className="pagination_button">
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      </div>

      <div className="page_numbers">
      {pageNumbers.slice(currentPage - 1, currentPage + 14).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`pagination_button ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </button>
      ))}
      </div>

      <div>
      <button onClick={handleNextPage} disabled={currentPage === totalPages} className="pagination_button">
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
      </div>

      </div>
    </div>
  );
};

export default Pagination;
