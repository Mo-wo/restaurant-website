'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import styles from './navbar.module.css';
import Link from 'next/link';
import { app_text } from '@/constants/constants';


export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const [ closeNav, setCloseNav ] = useState<boolean>(false);


  const handleNavClose = () => {
    setCloseNav(!closeNav);
  }

  const navItems = [
    {id: 1, name: 'Home', path: '/'},
    {id: 2, name: 'Menu', path: '/menu'},
    {id: 3, name: 'Gallery', path: '/gallery'},
    {id: 4, name: 'About us', path: '/about-us'},
    {id: 5, name: 'Contact', path: '/contact'},
    {id: 6, name: 'Reservation', path: '/reservation'}
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.logoBg} role="img" aria-label={`${app_text.name}-logo-background`}>
        <Image src={logo} alt={`${app_text.name}-logo`} className={styles.logo} />
      </div>

      <ul className={closeNav ? styles.ul :  `${styles.ulClose}`}>
        {navItems.map((item) => (
          <React.Fragment key={item.id}>
            {item.path === '/reservation' ? (
              <button className={`${styles.reservation} ${styles.mobileButton}`}>
                <Link href='https://docs.google.com/document/d/1nPvYHClUmQ2rgR9_vbVKQx7HTQAWCiBzRcN37wEHVKU/edit?usp=sharing' passHref legacyBehavior><a target='_blank'>{item.name}</a></Link>
              </button>
            ) : (
              <li key={item.id} className={isActive(item.path) ? styles.active : styles.li} onClick={handleNavClose}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>

      <button className={styles.deskTopButton}>
        <Link href='/reservation' passHref legacyBehavior><a target='_blank' >Reservation</a></Link>
      </button>

      <div className={styles.menuWrapper} onClick={handleNavClose}>
        <span className={`${closeNav ? styles.line1 : styles.line} ${styles.lineColour}`}></span>
        <span className={closeNav ? styles.line2 : styles.line}></span>
        <span className={closeNav ? styles.line3 : `${styles.line} ${styles.lineColour}`}></span>
      </div>
    </nav>
  );
};
