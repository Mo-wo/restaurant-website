import React from 'react'
import { Section } from '@/components/lvl1/section/Section'
import Image from 'next/image'
import styles from './chefsCorner.module.css';
import { signatureDishes } from '@/data/data';
import chef from '@/assets/images/aboutUsImages/chef.svg';
import Button from '@/components/lvl2/button/Button';
import ImageComponent from '@/components/lvl2/image/Image';


export default function ChefsCorner() {

  return (
    <>
      <Section color={'white'}>
        <h2 className={styles.h2}>Chef's Corner</h2>

        <div className={styles.contentContainer}>
          <ImageComponent src={chef} alt={`${chef}'s-img`} className={styles.chefImage} />

          <div className={styles.articleContainer}>
            <article className={styles.article}>
              <p>Meet Chef James Lawson, the creative force behind our culinary magic. With over 15 years of experience in kitchens across the globe, Chef James blends traditional techniques with modern innovations to craft dishes that delight the senses. His journey began with a passion for fresh ingredients and has evolved into a mission to create unforgettable dining experiences.</p>
            </article>

            <div className={styles.dishesContainer}>
              <h3>Signature Dishes</h3>
              <div className={styles.dishesWrapper}>
                {signatureDishes.map((dish, index) => (
                  <div key={index.toString()} className={styles.dishWrapper}>
                    <ImageComponent src={dish.image} alt={`${dish.name}'s-img`} className={styles.image} />
                    <article className={styles.article2}>
                      <h4>{dish.name}</h4>
                      <p>{dish.desc}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className={styles.ctaSection}>
          <h2>A GLIMPSE OF OUR WORLD</h2>
          <Button href='/gallery/tour' text={'More pictures'} marginTop={'0'}/>
        </div>
      </Section>
    </>
  )
}
