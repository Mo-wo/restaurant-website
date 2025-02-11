import React from 'react';
import { Section } from '@/components/lvl1/section/Section';
import styles from './signatureDishes.module.css';
import chefsFavourite from '@/assets/images/menuItems/chefsFavourite.svg';
import restaurantSignature from '@/assets/images/menuItems/restaurantSignature.svg';
import specials from '@/assets/images/menuItems/specials.svg';
import { MenuCard } from '@/components/lvl3/menuCard/MenuCard';
import { LinkButton } from '@/components/lvl2/button/Button';


export default function SignatureDishes() {
  const signatureDishes = [
    {
      id: '1',
      name: `Chef's Favourite`,
      img: chefsFavourite,
    },
    {
      id: '2',
      name: `Restaurant Signature`,
      img: restaurantSignature,
    },
    {
      id: '1',
      name: `Specials`,
      img: specials,
    }
  ]
  return (
    <>
    <Section color='black' contentContainerStyle={styles.section}>
      <h2 data-aos='zoom-in'>Our signature dishes- <br/>crafted to perfection</h2>
      <div className={styles.container}>
        {signatureDishes.map((item, index) => (
          <React.Fragment key={index.toString()}>
            <MenuCard cardImgSrc={item.img} title={item.name} />
          </React.Fragment>
        ))}
      </div>
    </Section>

    <Section sectionStyle={styles.section} contentContainerStyle={styles.orderSection} color={'white'}>
      <h2 data-aos='zoom-in' style={{marginBottom: 0}}>DON&apos;T JUST BROWSE - INDULGE</h2>
      <p data-aos='fade-up'>Order online for quick and delicious delivery straight to your door</p>
      <LinkButton href="/menu" text='Order Now' />
    </Section>
    </>
  )
}
