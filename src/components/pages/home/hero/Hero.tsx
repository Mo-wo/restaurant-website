import { BackgroundImage } from '@/components/lvl2/BackgroundImage/BackgroundImage';
import styles from './hero.module.css';
import homeheroimage from '@/assets/images/homeheroimage.svg';


export default function Hero() {
  return (
    <main className={styles.main}>
      <BackgroundImage
        src={homeheroimage}
        alt={'an image of a plate of rice'}
        style={styles.hero}
      >
        <article></article>
      </BackgroundImage>

    </main>
  );
}
