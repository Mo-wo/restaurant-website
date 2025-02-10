'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import styles from './navbar.module.css';
import Link from 'next/link';
import { app_text } from '@/constants/constants';
import { ReservationForm } from '@/components/lvl3/reservationForm/ReservationForm';
import { Modal } from '@/components/lvl3/modal/Modal';
import { useModalStore } from '@/context/navContext';
import { IoMdArrowDropdown } from "react-icons/io";
import { Dropdown } from '@/components/lvl3/Dropdown/Dropdown';
import { galleryDropdownData, menuDropdownData, navItems } from '@/data/data';
import { Button, LinkButton } from '@/components/lvl2/button/Button';


export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };
  const [closeNav, setCloseNav] = useState<boolean>(false);
  const { isModalOpen, openModal, closeModal } = useModalStore();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


  const handleDropdownOpen = (dropdownId: string) => {
    setActiveDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  const handleNavClose = () => {
    setCloseNav(!closeNav);
    handleDropdownClose();
  };

  const handleLinkCLick = (path: string) => {
    handleNavClose();
  }

  const handleReservationClick = () => {
    setCloseNav(!closeNav);
    openModal();
  };



  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoBg} role="img" aria-label={`${app_text.name}-logo-background`}>
          <Image src={logo} alt={`${app_text.name}-logo`} className={styles.logo} />
        </div>

        <ul className={closeNav ? styles.ul : `${styles.ulClose}`}>
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {item.path === '/reservation' ? (
                <Button text={item.name} className={`${styles.reservation} ${styles.mobileButton}`} onClick={handleReservationClick}  />
              ) : (
                <li
                  key={item.id}
                  className={isActive(item.path) ? styles.active : styles.li}
                  >
                  <Link
                    href={item.path}
                    onClick={handleNavClose}
                    >{item.name}
                  </Link>
                  {(item.id === 2 || item.id === 3) && (
                    <>
                      <span
                        onMouseEnter={() => handleDropdownOpen(item.name)}
                        onClick={() => handleDropdownOpen(item.name)}
                        className={styles.dropdownWrapper}><IoMdArrowDropdown size={20} color={'white'} className={styles.dropdown} />
                        </span>
                        <Dropdown
                          data={item.id === 2 ? menuDropdownData : galleryDropdownData}
                          onItemClick={handleDropdownClose}
                          className={activeDropdown === item.name ? styles.showDropdown : styles.hideDropdown}
                        />
                    </>
                  )}
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>

        <LinkButton href='#reservation' text='Reservation' linkStyle={styles.deskTopButton} marginTop={0} />

        <div className={styles.menuWrapper} onClick={handleNavClose}>
          <span className={`${closeNav ? styles.line1 : styles.line} ${styles.lineColour}`}></span>
          <span className={closeNav ? styles.line2 : styles.line}></span>
          <span className={closeNav ? styles.line3 : `${styles.line} ${styles.lineColour}`}></span>
        </div>
      </nav>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ReservationForm />
      </Modal>
    </>
  );
};
