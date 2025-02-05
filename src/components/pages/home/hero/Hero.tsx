import { HomeBanner } from '@/components/lvl2/homeBanner/HomeBanner';
import styles from './hero.module.css';
import homeheroimage from '@/assets/images/homeheroimage.svg';
import Link from 'next/link';


export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <HomeBanner
        src={homeheroimage}
        alt={'hero-image'}
        style={styles.heroImageWrapper}
        imgStyle={styles.heroImage}
      >
        <article className={styles.article} data-aos="zoom-in">
          <h1>WHERE <br /> FLAVOUR  <br /> MEETS DELIGHT</h1>
          <p>Experience the perfect blend of fresh ingredients, bold flavors, and unforgettable moments at every bite</p>

          <button>
            <Link href='/menu' passHref legacyBehavior>View our menu</Link>
          </button>
        </article>
      </HomeBanner>
    </section>
  );
}
