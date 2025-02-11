import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from './searchFilter.module.css';
import { IoFilter } from "react-icons/io5";


export const SearchFilter = () => {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchWrapper}>
        <BiSearch size={20} />
        <label htmlFor='search'>
          <input name='search' id='search' type='text' placeholder='Search' className={styles.searchInput} />
        </label>
      </div>

      <div className={styles.filterWrapper}>
        <IoFilter size={20} />
        <div className={styles.buttonWrapper}>
        <button className={styles.textButton}>Price</button>
        <button className={styles.textButton}>Popular</button>
        <button className={styles.textButton}>Newest</button>
        </div>
        </div>
    </section>
  )
}
