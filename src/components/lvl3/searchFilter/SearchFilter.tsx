'use client';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from './searchFilter.module.css';
import { IoFilter } from "react-icons/io5";

type SearchFilterProps = {
  query: string;
  onSearch: (searchQuery: string) => void;
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

export const SearchFilter:React.FC<SearchFilterProps> = ({ query, onSearch,onFilterChange, activeFilter}) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  


  const handleFilter = (filterType: string) => {
    switch (filterType) {
      case 'price':
        onFilterChange('price');
        break;
      case 'popular':
        onFilterChange('popular');
        break;
      case 'new':
        onFilterChange('new');
        break;
    }
    setShowFilter(false);
  }

  return (
    <section className={styles.searchSection}>
      <div className={styles.searchWrapper}>
        <BiSearch size={20} />
        <label htmlFor='search'>
          <input
            name='search'
            id='search'
            type='text'
            placeholder='Search'
            className={styles.searchInput}
            value={query}
            onChange={(e) => onSearch(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.filterWrapper}>
        <button className={styles.textButton} onClick={() => setShowFilter(!showFilter)}><IoFilter size={20} /></button>
        <div className={showFilter ? styles.buttonWrapper : styles.hideButtonWrapper}>
          <button className={activeFilter === 'price' ? styles.activeFilter : styles.textButton}  onClick={() => handleFilter('price')}>Price</button>
          <button className={activeFilter === 'popular' ? styles.activeFilter : styles.textButton} onClick={() => handleFilter('popular')}>Popular</button>
          <button className={activeFilter === 'new' ? styles.activeFilter : styles.textButton} onClick={() => handleFilter('new')}>Newest</button>
        </div>
      </div>
    </section>
  )
}
