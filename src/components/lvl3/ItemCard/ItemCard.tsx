import styles from './itemCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ItemCardProps {
  cardStyle?: string;
  cardImgWrapperStyle?: string;
  cardImgSrc?: string | '';
  cardHeading?: string | '';
  cardInfo?: string;
  btnText?: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  cardStyle, cardImgWrapperStyle, cardImgSrc, cardHeading, cardInfo, btnText
}) => {
  return (
    <div role='complementary' className={`${styles.cardWrapper} ${cardStyle}`} data-aos='zoom-in-up' data-aos-offse='50'>
      <div className={`${styles.imgWrapper} ${cardImgWrapperStyle}`}>
        <Image src={cardImgSrc ? cardImgSrc : ''} alt={cardHeading ? cardHeading : ''} className={styles.img} />
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
