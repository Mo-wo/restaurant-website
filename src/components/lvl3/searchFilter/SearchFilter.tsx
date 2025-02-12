'use client';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from './searchFilter.module.css';
import { IoFilter } from "react-icons/io5";

type SearchFilterProps = {
  query: string;
  onSearch: (searchQuery: string) => void;
  onPriceFilter: (category: string) => void;
  onPopularFilter: (category: string) => void;
  onNewestFilter: (category: string) => void;
}

export const SearchFilter:React.FC<SearchFilterProps> = ({ query, onSearch, onPriceFilter, onNewestFilter, onPopularFilter }) => {
  const [searchQuery, setSearchQuery] = useState<string>(query);
  const [filtercategory, setFilterCategory] = useState<string>('');
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
    onSearch(searchQuery);
  }

  const handlePriceFilter = () => {
    setFilterCategory('price');
    onPriceFilter(filtercategory);
  };

  const handlePopularFilter = () => {
    setFilterCategory('popular');
    onPopularFilter(filtercategory);
  };
  const handleNewestFilter = () => {
    setFilterCategory('newest');
    onNewestFilter(filtercategory);
  };

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
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
            value={searchQuery}
            onChange={handleSearch}
          />
        </label>
      </div>

      <div className={styles.filterWrapper}>
        <button className={styles.textButton} onClick={handleFilterClick}><IoFilter size={20} /></button>
        <div className={showFilter ? styles.buttonWrapper : styles.hideButtonWrapper}>
          <button className={styles.textButton} onClick={handlePriceFilter}>Price</button>
          <button className={styles.textButton} onClick={handlePopularFilter}>Popular</button>
          <button className={styles.textButton} onClick={handleNewestFilter}>Newest</button>
        </div>
      </div>
    </section>
  )
}
