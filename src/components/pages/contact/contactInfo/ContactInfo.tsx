import React from 'react';
import './contactInfo.module.css';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import { Section } from '@/components/lvl1/section/Section';
import styles from './contactInfo.module.css'
import { app_text } from '@/constants/constants';
import { PhoneIcon } from '@/components/lvl3/icons/PhoneIcon';
import { SocialIcon2 } from '@/components/lvl3/icons/SocialIcon2';
import { FacebookIcon } from '@/components/lvl3/icons/FacebookIcon';
import { InstagramIcon } from '@/components/lvl3/icons/InstagramIcon';
import { IoMdTimer } from "react-icons/io";
import Link from 'next/link';

export const ContactInfo: React.FC = () => {
  const iconSize = 25
  const socialsIconSize = 30
  return (
    <Section color='white' contentContainerStyle={styles.sectionWrapper}>

      <div className={styles.contactItem} data-aos='fade-up'>
        <div className={styles.circle}>
          <MdOutlineMarkEmailUnread size={iconSize} />
        </div>
        <div className={styles.contactText}>
          <h3>EMAIL</h3>
          <p>{app_text.email}</p>
        </div>
      </div>
      <div className={styles.contactItem} data-aos='fade-up'>
        <div className={styles.circle}>
          <RiMapPin2Line size={iconSize} />
        </div>
        <div className={styles.contactText}>
          <h3>LOCATION</h3>
          <p>{app_text.full_address}</p>
        </div>
      </div>
      <div className={styles.contactItem} data-aos='fade-up'>
        <div className={styles.circle}>
          <PhoneIcon width={iconSize} />
        </div>
        <div className={styles.contactText}>
          <h3>PHONE</h3>
          <p>{app_text.phone}</p>
        </div>
      </div>

      <div className={styles.contactItem} data-aos='fade-up'>
        <div className={styles.circle}>
          <SocialIcon2 width={iconSize} />
        </div>
        <div className={styles.contactText}>
          <h3>Social</h3>
        <div className={styles.socialsWrapper}>
          <Link href='https://facebook.com' legacyBehavior passHref>
            <a target='_blank' className={styles.contactItem2}>
              <FacebookIcon width={socialsIconSize} height={socialsIconSize} />
              Facebook
            </a>
          </Link>
          <Link href='https://instagram.com' legacyBehavior passHref>
            <a target='_blank' className={styles.contactItem2}>
              <InstagramIcon width={socialsIconSize} height={socialsIconSize} />
              Instagram
            </a>
          </Link>
        </div>
        </div>
        </div>

      <div className={styles.contactItem} data-aos='fade-up'>
        <div className={styles.circle}>
          <IoMdTimer size={iconSize} />
        </div>
        <div className={styles.contactText}>
          <h3>Hours</h3>
          <div className={styles.businessHoursWrapper}>
            <div className={styles.businessHoursItem}>
              <h4>Breakfast</h4>
              <p className={styles.businessHours}>Mon - Fri</p>
              <p className={styles.businessHours}>9am to 11:30am</p>
            </div>
            <div className={styles.businessHoursItem}>
              <h4>Lunch</h4>
              <p className={styles.businessHours}>Mon - Sun</p>
              <p className={styles.businessHours}>12 noon - 4pm</p>
            </div>
            <div className={styles.businessHoursItem}>
              <h4>Dinner</h4>
              <p className={styles.businessHours}>Mon - Sun</p>
              <p className={styles.businessHours}>5pm - 10pm</p>
            </div>
          </div>
        </div>
      </div>


    </Section>
  );
};
