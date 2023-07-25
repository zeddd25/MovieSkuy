export const handlePrevPage = (currentPage, setCurrentPage) => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  
  export const handleNextPage = (currentPage, totalPages, setCurrentPage) => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  
  export const handlePageClick = (page, setCurrentPage) => {
    setCurrentPage(page);
  };
  