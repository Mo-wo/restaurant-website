import styles from './menuCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MenuCardProps {
  cardStyle?: string;
  cardImgWrapperStyle?: string;
  cardImgSrc: string;
  cardImgStyle?: string;
  cardTextWrapperStyle?: string;
  heading?: boolean;
  title?: string;
  // cardInfo?: string;
  // showBtn?: boolean;
  // btnStyle?: string;
  // btnPath?: string;
  // btnText?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  cardStyle, cardImgWrapperStyle, cardImgSrc, cardImgStyle, cardTextWrapperStyle, title,
}) => {

  return (
    <div role='complementary' className={`${styles.cardWrapper} ${cardStyle}`} data-aos='fade-up' data-aos-offset='50'>
        <div className={`${styles.imgWrapper} ${cardImgWrapperStyle}`}>
          <Image src={cardImgSrc} alt={title ?? ''} className={`${styles.img} ${cardImgStyle}`} />
        </div>
      <div role='complementary' className={`${styles.cardTextWrapper} ${cardTextWrapperStyle}`}>
          <p className={styles.cardHeading}>{title}</p>
      </div>
    </div>
  )
}
