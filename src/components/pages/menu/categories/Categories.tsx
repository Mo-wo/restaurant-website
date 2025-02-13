import styles from './categories.module.css';
import Image from 'next/image';
import breakfast from '@/assets/images/menuItems/breakfast.svg';
import lunch from '@/assets/images/menuItems/lunch.svg';
import dinner from '@/assets/images/menuItems/dinner.svg';
import { Section } from '@/components/lvl1/section/Section';
import Link from 'next/link';


export default function Categories() {

  const categories = [
    {
      id: '1',
      imgSrc: breakfast,
      name: 'Breakfast',
      pathname: 'breakfast',
    },
    {
      id: '2',
      imgSrc: lunch,
      name: 'Lunch',
      pathname: 'lunch',
    },
    {
      id: '3',
      imgSrc: dinner,
      name: 'Dinner',
      pathname: 'dinner',
    }
  ];

  return (
    <Section contentContainerStyle={styles.section} color={'white'}>
      <h2 className={styles.h2} data-aos="zoom-in">SAVOR EVERY MEAL, ANY TIME OF DAY</h2>

      <div className={styles.container}>
        {categories.map((category, index) => (
          <div key={index.toString()} className={styles.wrapper} >
            <div className={styles.imageWrapper} data-aos='fade-up'>
              <Image src={category.imgSrc} alt={category.name} className={styles.img} />
            </div>
            <Link href={`/menu/${category.name.toLowerCase()}`} className={styles.text} data-aos='fade-up'>{category.name}</Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
