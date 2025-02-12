'use client';
import React from 'react';
import styles from './footer.module.css';
import { ReservationForm } from '@/components/lvl3/reservationForm/ReservationForm';
import logo from '@/assets/images/logo.svg';
import { app_text } from '@/constants/constants';
import { RiMailSendLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { useModalStore } from '@/context/navContext';
import ImageComponent from '../image/Image';
import { PhoneIcon } from '@/components/lvl3/icons/PhoneIcon';

const Footer: React.FC = () => {
    const { isModalOpen} = useModalStore();

  return (
    <footer className={styles.footer}>

      {/* Reservation form section */}
      {!isModalOpen &&
        <section className={styles.footerTop} id='reservation'>
          <div role={'complementary'} className={styles.imgLeft}>
          </div>
          <ReservationForm />
          <div role={'complementary'} className={styles.imgRight}>
          </div>
        </section>
      }

      {/* Contact and opening hours section */}
      <section className={styles.footerBottom}>
        <div role={'complementary'} className={styles.footerBottomLeftWrapper}>
          <ImageComponent src={logo} alt={`${app_text.name}-logo`} className={styles.logoWrapper} animation='none' />
           <p>We&apos;re passionate about crafting unforgettable dining experiences. From our flavorful dishes to our warm hospitality, every detail is designed to delight. Visit us and savor the difference!</p>
        </div>

         <div role={'complementary'} className={styles.footerContact}>
          <div role={'complementary'} className={styles.contactItem}>
            <IoLocationOutline className={styles.icon} />
            <p>{app_text.full_address}</p>
          </div>
          <div role={'complementary'} className={styles.contactItem}>
            <span className={styles.icon}><PhoneIcon color={'white'} /></span>
            <p>{app_text.phone}</p>
          </div>
          <div role={'complementary'} className={styles.contactItem}>
            <RiMailSendLine className={styles.icon} />
            <p className={styles.email}>{app_text.email}</p>
          </div>
        </div>

        <div role='complementary' className={styles.openingHoursContainer}>
          <div role='complementary' className={styles.openingHoursWrapper}>
              <p>Breakfast</p>
              <p>Mon - Fri</p>
              <p>9am to 11:30am</p>
          </div>

          <div role='complementary' className={styles.openingHoursWrapper}>
              <p>Lunch</p>
              <p>Mon - Sun</p>
              <p>12pm to 4pm</p>
          </div>

          <div role='complementary' className={styles.openingHoursWrapper}>
              <p>Dinner</p>
              <p>Mon - Sun</p>
              <p>5pm to 10pm</p>
          </div>

        </div>

      </section>

      {/* Legal and copyright section */}
      <section className={styles.footerLegal}>
        <p>&copy; Copyright 2025 | Website by Tinker Devs | All Rights Reserved </p>
      </section>
    </footer>
  );
};

export default Footer;
