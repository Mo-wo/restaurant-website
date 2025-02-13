"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/images/logo.svg";
import styles from "./navbar.module.css";
import Link from "next/link";
import { app_text } from "@/constants/constants";
import { ReservationForm } from "@/components/lvl3/reservationForm/ReservationForm";
import { Modal } from "@/components/lvl3/modal/Modal";
import { useModalStore } from "@/context/navContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { Dropdown } from "@/components/lvl3/Dropdown/Dropdown";
import { galleryDropdownData, menuDropdownData, navItems } from "@/data/data";
import { Button, LinkButton } from "@/components/lvl2/button/Button";
import ImageComponent from "../image/Image";
import cart from '@/assets/images/cart.svg';

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
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

  const handleReservationClick = () => {
    setCloseNav(!closeNav);
    openModal();
  };

  const goToCart = () => {
    router.push('/cart');
  }

  return (
    <>
      <nav className={styles.nav}>
        <ImageComponent
          src={logo}
          alt={`${app_text.name}-logo`}
          className={styles.logoBg}
          role="img"
          aria-label={`${app_text.name}-logo-background`}
          animation="none"
        />

        <ul className={closeNav ? styles.ul : `${styles.ulClose}`}>
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {item.path === "/reservation" ? (
                <Button
                  text={item.name}
                  className={`${styles.reservation} ${styles.mobileButton}`}
                  onClick={handleReservationClick}
                />
              ) : (
                <li
                  key={index.toString()}
                  className={isActive(item.path) ? styles.active : styles.li}
                >
                  <Link href={item.path} onClick={handleNavClose}>
                    {item.name}
                  </Link>
                  {(item.id === 2 || item.id === 3) && (
                    <>
                      <span
                        onMouseEnter={() => handleDropdownOpen(item.name)}
                        onClick={() => handleDropdownOpen(item.name)}
                        className={styles.dropdownWrapper}
                      >
                        <IoMdArrowDropdown
                          size={20}
                          color={"white"}
                          className={styles.dropdown}
                        />
                      </span>
                      <Dropdown
                        data={
                          item.id === 2 ? menuDropdownData : galleryDropdownData
                        }
                        onItemClick={handleDropdownClose}
                        className={
                          activeDropdown === item.name
                            ? styles.showDropdown
                            : styles.hideDropdown
                        }
                      />
                    </>
                  )}
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>

        {/* <div className={styles.cartContainer}>
            <ImageComponent src={require('../../../assets/images/cart.svg')} alt={"cart-image"} className={styles.imgWrapper} animation={'zoom-in'} onClick={goToCart} />
            <p className={styles.cartCounter} data-aos='zoom-in'><span>{90}</span></p>
          </div> */}
        
        <div className={styles.navButtonsDesktop}>
          <div className={styles.cartContainer}>
              <ImageComponent src={cart} alt={"cart-image"} className={styles.imgWrapper} animation={'zoom-in'} onClick={goToCart} />
              <p className={styles.cartCounter} data-aos='zoom-in'><span>{90}</span></p>
          </div>
          <LinkButton
          href="#reservation"
          text="Reservation"
          linkStyle={styles.deskTopButton}
          marginTop={"0"}
        />
        </div>

        <div className={styles.navButtons}>
          <div className={styles.cartContainer}>
                <ImageComponent src={cart} alt={"cart-image"} className={styles.imgWrapper} animation={'zoom-in'} onClick={goToCart} />
                <p className={styles.cartCounter} data-aos='zoom-in'><span>{90}</span></p>
            </div>
          <div className={styles.menuWrapper} onClick={handleNavClose}>
            <span
              className={`${closeNav ? styles.line1 : styles.line} ${
                styles.lineColour
              }`}
            ></span>
            <span className={closeNav ? styles.line2 : styles.line}></span>
            <span
              className={
                closeNav ? styles.line3 : `${styles.line} ${styles.lineColour}`
              }
            ></span>
          </div>
        </div>
        
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ReservationForm />
      </Modal>
    </>
  );
};
