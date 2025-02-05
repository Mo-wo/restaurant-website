import { Section } from '@/components/lvl1/section/Section';
import styles from './interiorPreview.module.css';
import { ItemCard } from '@/components/lvl3/itemCard/ItemCard';
import interiorimageone from '@/assets/images/interior/interiorimageone.svg';
import interiorimagetwo from '@/assets/images/interior/interiorimagetwo.svg';
import interiorimagethree from '@/assets/images/interior/interiorimagethree.svg';
import interiorimagefour from '@/assets/images/interior/interiorimagefour.svg';
import interiorimagefive from '@/assets/images/interior/interiorimagefive.svg';



export const InteriorPreview = () => {
  return (
    <Section sectionStyle={styles.bestSellerSection} color={'white'}>
      <div className={styles.cardContainer}>
      <ItemCard
          cardStyle={styles.cardWrapperMenu}
          heading={true}
          cardHeading={'Step into our world'}
          showBtn={true}
          btnPath={'/gallery'}
          btnText={'More Pictures'}
          cardTextWrapperStyle={styles.cardTextWrapperMenu}
          btnStyle={styles.cardBtnMenu}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={interiorimageone}
          cardImgStyle={styles.cardImgStyle}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={interiorimagetwo}
          cardImgStyle={styles.cardImgStyle}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={interiorimagethree}
          cardImgStyle={styles.cardImgStyle}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={interiorimagefour}
          cardImgStyle={styles.cardImgStyle}
        />
        <ItemCard
          cardStyle={styles.cardWrapperMenu}
          cardImgWrapperStyle={styles.cardImageWrapperMenu}
          cardImgSrc={interiorimagefive}
          cardImgStyle={styles.cardImgStyle}
        />
      </div>
    </Section>
  )
}
