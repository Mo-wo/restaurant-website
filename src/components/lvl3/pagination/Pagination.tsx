import React, { useState, useEffect } from 'react';
import styles from './pagination.module.css';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const getVisiblePages = (page: number, total: number) => {
    if (total <= 4) {
      return Array.from({ length: total }, (_, i) => i + 1);
    } else {
      const startPage = Math.floor((page - 1) / 4) * 4 + 1;
      const endPage = Math.min(startPage + 3, total);
      const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
      return pages;
    }
  };

  useEffect(() => {
    setVisiblePages(getVisiblePages(currentPage, totalPages));
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.paginationWrapper}>
      {currentPage > 4 && (
        <button onClick={() => handlePageChange(currentPage - 1)} className={styles.textButton}>...</button>
      )}
      {visiblePages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? styles.activePage : `${styles.textButton}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <button onClick={() => handlePageChange(visiblePages[visiblePages.length - 1] + 1)} className={styles.textButton}><IoEllipsisHorizontalSharp />
        </button>
      )}
    </div>
  );
};
