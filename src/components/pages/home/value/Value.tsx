import { Section } from '@/components/lvl1/section/Section';
import styles from './value.module.css';
import { LinkButton } from '@/components/lvl2/button/Button';

export const Value = () => {
  return (
    <Section sectionStyle={styles.section} contentContainerStyle={styles.contentContainer} color={'white'}>
      <h2 data-aos='zoom-in'>Welcome to restaurant</h2>
      <p data-aos='fade-up'>At Restaurant, we believe great food brings people together. From our carefully curated ingredients to our warm and inviting atmosphere, we craft every dish with love and passion. Whether you&apos;re celebrating a special occasion or enjoying a casual meal, we&apos;re here to make it unforgettable.</p>
      <LinkButton href='/about-us' text='About us'  />
    </Section>
  )
}
