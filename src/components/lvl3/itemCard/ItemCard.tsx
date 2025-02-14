import styles from './itemCard.module.css';
import React from 'react';
import { LinkButton } from '@/components/lvl2/button/Button';
import ImageComponent from '@/components/lvl2/image/Image';
import { StaticImageData } from 'next/image';


interface ItemCardProps {
  cardStyle?: string;
  cardImgWrapperStyle?: string;
  cardImgSrc?: StaticImageData;
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
  cardStyle, cardImgWrapperStyle, cardImgSrc, cardTextWrapperStyle, cardHeading, cardInfo, btnStyle, btnPath, showBtn, heading
}) => {

  return (
    <div role='complementary' className={`${styles.cardWrapper} ${cardStyle}`} data-aos='fade-up' data-aos-offset='50'>
      {cardImgSrc &&
        <ImageComponent src={cardImgSrc} alt={cardHeading ?? ''} className={`${styles.imgWrapper} ${cardImgWrapperStyle}`} />
      }
      {cardHeading &&
        <div role='complementary' className={`${styles.cardTextWrapper} ${cardTextWrapperStyle}`}>
          {heading ? (
            <h2 className={styles.cardHeading}>{cardHeading}</h2>
          ) : (
            <h3 className={styles.cardHeading}>{cardHeading}</h3>
          )}
          {cardInfo && <p className={styles.cardInfoText}>{cardInfo}</p>}
          {showBtn &&
            <LinkButton
              href={btnPath ?? '/menu'}
              text={'View Details'}
              linkStyle={btnStyle}
            />
          }
        </div>}
    </div>
  )
}
