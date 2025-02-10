import React from 'react';
import styles from './dropdown.module.css';
import Link from 'next/link';

type DropdownProps = {
  data: {id: string, name: string, path: string}[];
  onItemClick?: () => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({data, onItemClick, className}) => {
  return (
    <ul className={`${styles.dropdownWrapper} ${className}`}>
      {data.map((item, index) => (
        <li className={styles.dropdownItem} key={index.toString()}>
          <Link href={item.path} key={index.toString()} onClick={onItemClick}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
