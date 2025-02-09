import React from 'react';
import menuimg1 from '@/assets/images/menuItems/menuGallery/menuimg1.svg';
import menuimg2 from '@/assets/images/menuItems/menuGallery/menuimg2.svg';
import menuimg3 from '@/assets/images/menuItems/menuGallery/menuimg3.svg';
import menuimg4 from '@/assets/images/menuItems/menuGallery/menuimg4.svg';
import menuimg5 from '@/assets/images/menuItems/menuGallery/menuimg5.svg';
import menuimg6 from '@/assets/images/menuItems/menuGallery/menuimg6.svg';
import menuimg7 from '@/assets/images/menuItems/menuGallery/menuimg7.svg';
import menuimg8 from '@/assets/images/menuItems/menuGallery/menuimg8.svg';
import menuimg9 from '@/assets/images/menuItems/menuGallery/menuimg9.svg';
import menuimg10 from '@/assets/images/menuItems/menuGallery/menuimg10.svg';
import menuimg11 from '@/assets/images/menuItems/menuGallery/menuimg11.svg';
import menuimg12 from '@/assets/images/menuItems/menuGallery/menuimg12.svg';
import menuimg13 from '@/assets/images/menuItems/menuGallery/menuimg13.svg';
import menuimg14 from '@/assets/images/menuItems/menuGallery/menuimg14.svg';
import menuimg15 from '@/assets/images/menuItems/menuGallery/menuimg15.svg';
import menuimg16 from '@/assets/images/menuItems/menuGallery/menuimg16.svg';
import menuimg17 from '@/assets/images/menuItems/menuGallery/menuimg17.svg';
import menuimg18 from '@/assets/images/menuItems/menuGallery/menuimg18.svg';
import ImageComponent from '@/components/lvl2/image/Image';
import styles from './menuGallery.module.css';
import { Section } from '@/components/lvl1/section/Section';

export default function MenuGallery() {
  const galleryItems = [
    {id: '1', img: menuimg1},
    {id: '2', img: menuimg2},
    {id: '3', img: menuimg3},
    {id: '4', img: menuimg4},
    {id: '5', img: menuimg5},
    {id: '6', img: menuimg6},
    {id: '7', img: menuimg7},
    {id: '8', img: menuimg8},
    {id: '9', img: menuimg9},
    {id: '10', img: menuimg10},
    {id: '11', img: menuimg11},
    {id: '12', img: menuimg12},
    {id: '13', img: menuimg13},
    {id: '14', img: menuimg14},
    {id: '15', img: menuimg15},
    {id: '16', img: menuimg16},
    {id: '17', img: menuimg17},
    {id: '18', img: menuimg18},
  ]
  return (
    <Section color='white' contentContainerStyle={styles.galleryWrapper}>
      {galleryItems.map((item, index) => (
        <ImageComponent key={index.toString()} src={item.img} alt={''} className={`${styles.menuImg} ${styles[`menuImg${item.id}`]}`} />
        // <img key={index.toString()} src={item.img} alt={''} className={`${styles.menuImg} ${styles[`menuImg${index}`]}`} />
      ))}
    </Section>
  )
}
