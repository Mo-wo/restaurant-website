import { Section } from '@/components/lvl1/Section/Section';
import styles from './bestSeller.module.css';
import { MenuDescCard } from '@/components/lvl3/menuDescCard/MenuDescCard';
import bestsellerimageone from '@/assets/images/menuItems/bestsellerimageone.svg';
import bestsellerimagetwo from '@/assets/images/menuItems/bestsellerimagetwo.svg';
import bestsellerimagethree from '@/assets/images/menuItems/bestsellerimagethree.svg';

export const BestSeller = () => {
  return (
    <Section sectionStyle={styles.bestSeller} color={'white'}>
      <h2>A taste of our best</h2>
      <div>
        <MenuDescCard
          cardStyle={''}
          cardImgWrapperStyle={''}
          cardImgSrc={bestsellerimageone}
          cardHeading={'Jollof Rice'}
          cardInfo={'A flavorful rice dish cooked with tomatoes, peppers, onions, and spices.'}
        />
        <MenuDescCard
          cardStyle={''}
          cardImgWrapperStyle={''}
          cardImgSrc={bestsellerimagetwo}
          cardHeading={'Pounded Yam and Egusi'}
          cardInfo={'A smooth, stretchy dough-like dish made from yams, paired with egusi soup, a rich, nutty soup.'}
        />
        <MenuDescCard
          cardStyle={''}
          cardImgWrapperStyle={''}
          cardImgSrc={bestsellerimagethree}
          cardHeading={'Moi Moi'}
          cardInfo={'A steamed bean pudding made from blended beans, peppers, and onions, often served has a side dish..'}
        />
      </div>
    </Section>
  )
}
