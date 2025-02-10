import styles from './itemCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface ItemCardProps {
  cardStyle?: string;
  cardImgWrapperStyle?: string;
  cardImgSrc?: string;
  cardImgStyle?: string;
  cardTextWrapperStyle?: string;
  heading?: boolean;
  cardHeading?: string;
  cardInfo?: string;
  showBtn?: boolean;
  btnStyle?: string;
  btnPath?: string;
  btnText?: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  cardStyle, cardImgWrapperStyle, cardImgSrc, cardImgStyle, cardTextWrapperStyle, cardHeading, cardInfo, btnStyle, btnPath, btnText, showBtn, heading
}) => {

  return (
    <div role='complementary' className={`${styles.cardWrapper} ${cardStyle}`} data-aos='fade-up' data-aos-offset='50'>
      {cardImgSrc &&
        <div className={`${styles.imgWrapper} ${cardImgWrapperStyle}`}>
          <Image src={cardImgSrc} alt={cardHeading ?? ''} className={`${styles.img} ${cardImgStyle}`} />
        </div>
      }
      {cardHeading && <div role='complementary' className={`${styles.cardTextWrapper} ${cardTextWrapperStyle}`}>
        {heading ? (
          <h2 className={styles.cardHeading}>{cardHeading}</h2>
        ) : (
          <h3 className={styles.cardHeading}>{cardHeading}</h3>
        )}
        {cardInfo && <p className={styles.cardInfoText}>{cardInfo}</p>}
      </div>}

      {showBtn && <div className={btnStyle}>
        <LinkButton />
        {/* <button className={styles.btn}>
          <Link href={btnPath ?? '/menu'} passHref legacyBehavior><a>{btnText ?? 'View Details'}</a></Link>
        </button> */}
      </div>}

    </div>
  )
}
