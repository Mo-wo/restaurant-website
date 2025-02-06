import styles from './categories.module.css';
import Image from 'next/image';
import breakfast from '@/assets/images/menuItems/breakfast.svg';
import lunch from '@/assets/images/menuItems/lunch.svg';
import dinner from '@/assets/images/menuItems/dinner.svg';
import { Section } from '@/components/lvl1/section/Section';
import Link from 'next/link';


export default function Categories() {

  const offerings = [
    {
      id: '1',
      imgSrc: breakfast,
      name: 'Breakfast'
    },
    {
      id: '2',
      imgSrc: lunch,
      name: 'Lunch'
    },
    {
      id: '3',
      imgSrc: dinner,
      name: 'Dinner'
    }
  ];

  return (
    <Section contentContainerStyle={styles.section} color={'white'}>
      <h2 className={styles.h2} data-aos="zoom-in">SAVOR EVERY MEAL, ANY TIME OF DAY</h2>

      <div className={styles.container}>
        {offerings.map((offering, index) => (
          <Link href='#' key={index.toString()} className={styles.wrapper} >
            <div className={styles.imageWrapper} data-aos='fade-up'>
              <Image src={offering.imgSrc} alt={offering.name} className={styles.img} />
            </div>
            <p className={styles.text} data-aos='fade-up'>{offering.name}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
