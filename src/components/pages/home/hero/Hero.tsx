import { HomeBanner } from '@/components/lvl2/banner/homeBanner/HomeBanner';
import styles from './hero.module.css';
import homeheroimage from '@/assets/images/homeheroimage.svg';
import { LinkButton } from '@/components/lvl2/button/Button';


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

          <LinkButton href='/menu' text='View our menu' marginTop={'0'} />
        </article>
      </HomeBanner>
    </section>
  );
}
