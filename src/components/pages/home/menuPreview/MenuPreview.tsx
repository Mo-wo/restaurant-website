import { Section } from '@/components/lvl1/Section/Section';
import styles from './menuPreview.module.css';
import { ItemCard } from '@/components/lvl3/ItemCard/ItemCard';
import bestsellerimageone from '@/assets/images/menuItems/bestsellerimageone.svg';
import bestsellerimagetwo from '@/assets/images/menuItems/bestsellerimagetwo.svg';
import bestsellerimagethree from '@/assets/images/menuItems/bestsellerimagethree.svg';

export const MenuPreview = () => {
  return (
    <Section sectionStyle={styles.bestSellerSection} color={'black'}>
      <div className={styles.cardContainer}>
        <ItemCard
          cardStyle={styles.cardWrapper}
          cardImgWrapperStyle={''}
          cardImgSrc={bestsellerimageone}
          cardHeading={'Jollof Rice'}
          cardInfo={'A flavorful rice dish cooked with tomatoes, peppers, onions, and spices.'}
        />
        <ItemCard
          cardStyle={styles.cardWrapper}
          cardImgWrapperStyle={''}
          cardImgSrc={bestsellerimagetwo}
          cardHeading={'Pounded Yam and Egusi'}
          cardInfo={'A smooth, stretchy dough-like dish made from yams, paired with egusi soup, a rich, nutty soup.'}
        />
        <ItemCard
          cardStyle={styles.cardWrapper}
          cardImgWrapperStyle={''}
          cardImgSrc={bestsellerimagethree}
          cardHeading={'Moi Moi'}
          cardInfo={'A steamed bean pudding made from blended beans, peppers, and onions, often served has a side dish..'}
        />
      </div>
    </Section>
  )
}
