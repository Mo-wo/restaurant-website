import { Section } from '@/components/lvl1/section/Section';
import styles from './menuPreview.module.css';
import { ItemCard } from '@/components/lvl3/itemCard/ItemCard';
import menuitemone from '@/assets/images/menuItems/menuitemone.svg';
import menuitemtwo from '@/assets/images/menuItems/menuitemtwo.svg';
import menuitemthree from '@/assets/images/menuItems/menuitemthree.svg';
import menuitemfour from '@/assets/images/menuItems/menuitemfour.svg';
import menuitemfive from '@/assets/images/menuItems/menuitemfive.svg';



export const MenuPreview = () => {
  return (
    <Section sectionStyle={styles.bestSellerSection} color={'black'}>
      <div className={styles.cardContainer}>
      <ItemCard
          cardStyle={styles.cardWrapperMenu}
          heading={true}
          cardHeading={'A glimpse of our world'}
          showBtn={true}
          btnPath={'/gallery'}
          btnText={'More Pictures'}
          cardTextWrapperStyle={styles.cardTextWrapperMenu}
          btnStyle={styles.cardBtnMenu}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={menuitemone}
          cardImgStyle={styles.cardImgStyle}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={menuitemtwo}
          cardImgStyle={styles.cardImgStyle}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={menuitemthree}
          cardImgStyle={styles.cardImgStyle}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={menuitemfour}
          cardImgStyle={styles.cardImgStyle}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={menuitemfive}
          cardImgStyle={styles.cardImgStyle}
        />
      </div>
    </Section>
  )
}
