import React from 'react';
import interior1 from '@/assets/images/interior/interiorGallery/interior1.svg';
import interior2 from '@/assets/images/interior/interiorGallery/interior2.svg';
import interior3 from '@/assets/images/interior/interiorGallery/interior3.svg';
import interior4 from '@/assets/images/interior/interiorGallery/interior4.svg';
import interior5 from '@/assets/images/interior/interiorGallery/interior5.svg';
import interior6 from '@/assets/images/interior/interiorGallery/interior6.svg';
import interior7 from '@/assets/images/interior/interiorGallery/interior7.svg';
import interior8 from '@/assets/images/interior/interiorGallery/interior8.svg';
import interior9 from '@/assets/images/interior/interiorGallery/interior9.svg';
import interior10 from '@/assets/images/interior/interiorGallery/interior10.svg';
import interior11 from '@/assets/images/interior/interiorGallery/interior11.svg';
import ImageComponent from '@/components/lvl2/image/Image';
import styles from './interiorGallery.module.css';
import { Section } from '@/components/lvl1/section/Section';

export const InteriorGallery = () => {
  const galleryItems = [
    {id: '1', img: interior1},
    {id: '2', img: interior2},
    {id: '3', img: interior3},
    {id: '4', img: interior4},
    {id: '5', img: interior5},
    {id: '6', img: interior6},
    {id: '7', img: interior7},
    {id: '8', img: interior8},
    {id: '9', img: interior9},
    {id: '10', img: interior10},
    {id: '11', img: interior11},
  ]
  return (
    <Section color='white' contentContainerStyle={styles.galleryWrapper}>
      {galleryItems.map((item, index) => (
        <ImageComponent key={index.toString()} src={item.img} alt={''} className={`${styles.imgWrapper} ${styles[`imgWrapper${item.id}`]}`} />
      ))}
    </Section>
  )
}
