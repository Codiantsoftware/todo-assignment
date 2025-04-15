import React from "react";
import { PaginationProps } from "../../types/form";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}) => {
  return (
    <div className="pagination">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className={`btn ${currentPage === 1 ? "" : "btn-primary"}`}
      >
        Prev
      </button>

      <span className="pagination-info">{`Page ${currentPage} of ${totalPages}`}</span>

      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages || totalPages === 0}
        className={`btn ${currentPage === totalPages ? "" : "btn-primary"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
