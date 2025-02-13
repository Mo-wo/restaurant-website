import styles from './offerings.module.css';
import Link from 'next/link';
import Image from 'next/image';
import appetizer from '@/assets/images/menuItems/appetizer.svg';
import mainCourse from '@/assets/images/menuItems/mainCourse.svg';
import desert from '@/assets/images/menuItems/desert.svg';
import drinks from '@/assets/images/menuItems/drinks.svg';
import { Section } from '@/components/lvl1/section/Section';


export default function Offerings() {

  const offerings = [
    {
      id: '1',
      imgSrc: appetizer,
      name: 'Appetisers',
    },
    {
      id: '2',
      imgSrc: mainCourse,
      name: 'Main Courses',
    },
    {
      id: '3',
      imgSrc: desert,
      name: 'Deserts',
    },
    {
      id: '4',
      imgSrc: drinks,
      name: 'Drinks',
    },
  ];


  return (
    <Section contentContainerStyle={styles.section} color={'white'}>
      <h2 className={styles.h2} data-aos="zoom-in">Explore our delicious offerings</h2>

      <div className={styles.container}>
        {offerings.map((offering, index) => (
          <div key={index.toString()} className={styles.wrapper}  >
            <div className={styles.imageWrapper} data-aos='fade-up'>
              <Image src={offering.imgSrc} alt={offering.name} className={styles.img} />
            </div>
            <Link href={`/menu/${offering.name.toLowerCase().replace(/ /g, "-")}`} className={styles.text} data-aos='fade-up'>{offering.name}</Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
