import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from './searchFilter.module.css';
import { IoFilter } from "react-icons/io5";


export const SearchFilter = () => {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchWrapper}>
        <BiSearch />
        <label htmlFor='search'>
          <input name='search' id='search' type='text' className={styles.searchInput} />
        </label>
      </div>

      <div className={styles.filterWrapper}>
        <IoFilter />
        <button className={styles.textButton}>Price</button>
        <button className={styles.textButton}>Popular</button>
        <button className={styles.textButton}>Newest</button>
      </div>
    </section>
  )
}
