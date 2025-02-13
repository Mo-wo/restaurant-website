import React from 'react';
import ImageComponent from '@/components/lvl2/image/Image';
import styles from './menuCard.module.css';
import { LinkButton } from '@/components/lvl2/button/Button';

interface MenuCardProps {
  cardStyle?: string;
  cardImgWrapperStyle?: string;
  cardImgSrc: string;
  cardImgStyle?: string;
  cardTextWrapperStyle?: string;
  heading?: boolean;
  title?: string;
  href?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  cardStyle, cardImgWrapperStyle, cardImgSrc, cardTextWrapperStyle, title, href
}) => {

  return (
    <div role='complementary' className={`${styles.cardWrapper} ${cardStyle}`} data-aos='fade-up' data-aos-offset='50'>
      <ImageComponent src={cardImgSrc} alt={title ?? ''} className={`${styles.imgWrapper} ${cardImgWrapperStyle}`} />
      <div role='complementary' className={`${styles.cardTextWrapper} ${cardTextWrapperStyle}`}>
         { href ? <LinkButton text={title ?? ''} href={href}></LinkButton> : <p className={styles.cardHeading}>{title}</p>}
      </div>
    </div>
  )
}
