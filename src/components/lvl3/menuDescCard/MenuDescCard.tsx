import styles from './menuDescCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MenuDescCardProps {
  cardStyle: string;
  cardImgWrapperStyle: string;
  cardImgSrc: string;
  cardHeading: string;
  cardInfo: string;
  btnText?: string;
}

export const MenuDescCard: React.FC<MenuDescCardProps> = ({
  cardStyle, cardImgWrapperStyle, cardImgSrc, cardHeading, cardInfo, btnText
}) => {
  return (
    <div role='complementary' className={`${styles.cardWrapper} ${cardStyle}`}>
      <div className={`${styles.imgWrapper} ${cardImgWrapperStyle}`}>
        <Image src={cardImgSrc} alt={cardHeading} className={styles.img} />
      </div>
      <div role='complementary' className={styles.cardTextWrapper}>
        <h3 className={styles.cardHeading}>{cardHeading}</h3>
        <p className={styles.cardInfoText}>{cardInfo}</p>
      </div>

      <button className={styles.btn}>
         <Link href='/menu' passHref legacyBehavior><a target='_blank'>View Details</a></Link>
        </button>
    </div>
  )
}
