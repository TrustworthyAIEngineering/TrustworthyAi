import React from "react";

export function getPaginationItems(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set([1, totalPages, currentPage]);

  if (currentPage > 1) pages.add(currentPage - 1);
  if (currentPage < totalPages) pages.add(currentPage + 1);
  if (currentPage <= 3) {
    pages.add(2);
    pages.add(3);
    pages.add(4);
  }
  if (currentPage >= totalPages - 2) {
    pages.add(totalPages - 1);
    pages.add(totalPages - 2);
    pages.add(totalPages - 3);
  }

  return [...pages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b)
    .reduce((items, page) => {
      const previous = items[items.length - 1];
      if (typeof previous === "number" && page - previous > 1) {
        items.push(`ellipsis-${previous}-${page}`);
      }
      items.push(page);
      return items;
    }, []);
}

function Pagination({ currentPage, totalPages, paginationItems, onPageChange, label }) {
  return (
    <nav className="publication-pagination" aria-label={label}>
      <button
        type="button"
        className="pagination-button pagination-control"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <div className="pagination-pages">
        {paginationItems.map((item) =>
          typeof item === "number" ? (
            <button
              type="button"
              key={item}
              className={`pagination-button pagination-page ${
                item === currentPage ? "active" : ""
              }`}
              onClick={() => onPageChange(item)}
              aria-current={item === currentPage ? "page" : undefined}
            >
              {item}
            </button>
          ) : (
            <span key={item} className="pagination-ellipsis" aria-hidden="true">
              ...
            </span>
          )
        )}
      </div>

      <button
        type="button"
        className="pagination-button pagination-control"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
}

export default Pagination;
