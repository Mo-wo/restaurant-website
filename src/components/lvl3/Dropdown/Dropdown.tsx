import React from 'react';
import styles from './dropdown.module.css';
import Link from 'next/link';

type DropdownProps = {
  data: string[];
  onItemClick: (item: string) => void;
  className: string;
  parentPath: string;
}

export const Dropdown: React.FC<DropdownProps> = ({data, onItemClick, className, parentPath}) => {

  const handleClick = (item: string) => {
    onItemClick(item);
  }

  return (
    <ul className={`${styles.dropdownWrapper} ${className}`}>
      {data.map((item, index) => (
        <Link href={`/${parentPath}/${item}`}  key={index.toString()} className={styles.dropdownItem}>
          <li onClick={() => handleClick(item)}>{item}</li>
        </Link>
      ))}
    </ul>
  )
}
