import React from 'react';
import { Section } from '@/components/lvl1/section/Section';
import styles from './hero.module.css';
import restaurantView from '@/assets/images/aboutUsImages/restaurantView.svg';
import ImageComponent from '@/components/lvl2/image/Image';
import { LinkButton } from '@/components/lvl2/button/Button';

export default function Hero() {
  return (
    <>
      <Section color={'white'} contentContainerStyle={styles.sectionWrapper}>
        <h2 data-aos='zoom-in'>About Us</h2>
        <article className={styles.article} data-aos='fade-up'>
          <p>At [Restaurant Name], we turn every meal into a celebration of flavors, culture, and connection. Using fresh, high-quality ingredients, we craft dishes that delight your senses and make every visit unforgettable.</p>
          <p>From our welcoming atmosphere to bold and classic flavors, we&apos;re here to create exceptional dining experiences. Whether it&apos;s a special occasion or a casual treat, our heartfelt hospitality ensures every moment is memorable.</p>
          <br />
          <p>[Restaurant Name] {'–'} Where Great Food Meets Great Moments.</p>
        </article>

        <ImageComponent src={restaurantView} alt={`restaurant's-picture`} className={styles.image} />

        <div className={styles.ctaSection}>
          <h2>Step into our world</h2>
          <LinkButton href='gallery/tour' text='More Pictures' marginTop={'0'} />
        </div>
      </Section>
    </>
  )
}
