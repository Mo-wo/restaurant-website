import { Section } from '@/components/lvl1/section/Section';
import styles from './bestSeller.module.css';
import { ItemCard } from '@/components/lvl3/itemCard/ItemCard';
import bestsellerimageone from '@/assets/images/menuItems/bestsellerimageone.svg';
import bestsellerimagetwo from '@/assets/images/menuItems/bestsellerimagetwo.svg';
import bestsellerimagethree from '@/assets/images/menuItems/bestsellerimagethree.svg';

export const BestSeller = () => {
  return (
    <Section sectionStyle={styles.bestSellerSection} color={'white'}>
      <h2 data-aos='zoom-in'>A taste of our best</h2>
      <div className={styles.cardContainer}>
        <ItemCard
          cardStyle={styles.cardWrapper}
          cardImgSrc={bestsellerimageone}
          cardHeading={'Jollof Rice'}
          cardInfo={'A flavorful rice dish cooked with tomatoes, peppers, onions, and spices.'}
          showBtn={true}
          btnPath='/menu/main-courses/jollof-rice'
        />
        <ItemCard
          cardStyle={styles.cardWrapper}
          cardImgSrc={bestsellerimagetwo}
          cardHeading={'Pounded Yam and Egusi'}
          cardInfo={'A smooth, stretchy dough-like dish made from yams, paired with egusi soup, a rich, nutty soup.'}
          showBtn={true}
          btnPath='/menu/main-courses/pounded-yam-and-egusi'
        />
        <ItemCard
          cardStyle={styles.cardWrapper}
          cardImgSrc={bestsellerimagethree}
          cardHeading={'Moi Moi'}
          cardInfo={'A steamed bean pudding made from blended beans, peppers, and onions, often served has a side dish..'}
          showBtn={true}
          btnPath='/menu/main-courses/moi-moi'
        />
      </div>
    </Section>
  )
}
