'use client';
import React, { HTMLAttributes } from 'react';
import ImageComponent from '@/components/lvl2/image/Image';
import styles from './menuCategoryCard.module.css';
import { LinkButton } from '@/components/lvl2/button/Button';
import { MenuItem } from '@/interfaces/menuInterface';

interface MenuCategoryCardProps {
  cardTextWrapperStyle?: string;
  pathname: string;
  item: MenuItem;
}

export const MenuCategoryCard: React.FC<MenuCategoryCardProps & HTMLAttributes<HTMLDivElement>> = ({
  pathname, item, ...meuCategoryCardProps
}) => {

  return (
    <div role='complementary' className={styles.cardWrapper} data-aos='fade-up'  {...meuCategoryCardProps}>
      <ImageComponent src={item.img} alt={`${item.name}-photo`} className={styles.imgWrapper} animation='none' />
      <div role='complementary' className={styles.cardTextWrapper}>
        <div className={styles.textWrapper}>
          <h3 className={styles.heading}>{item.name}</h3>
          <p className={styles.desc}>{item.desc}</p>
          <p className={styles.price}>₦ {item.price}</p>
        </div>
        <LinkButton href={`${pathname}/${item.name.toLowerCase().replace(/ /g, "-")}`} text={'View Details'} linkStyle={styles.linkBtn} marginTop='0' />
      </div>
    </div>
  )
}
