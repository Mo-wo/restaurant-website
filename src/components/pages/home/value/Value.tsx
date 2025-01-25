import { Section } from '@/components/lvl1/Section/Section';
import styles from './value.module.css';
import Link from 'next/link';

export const Value = () => {
  return (
    <Section sectionStyle={styles.section} contentContainerStyle={styles.contentContainer} color={'white'}>
      <h2 data-aos='fade-down'>Welcome to restaurant</h2>
      <p data-aos='fade-up'>At Restaurant, we believe great food brings people together. From our carefully curated ingredients to our warm and inviting atmosphere, we craft every dish with love and passion. Whether you&apos;re celebrating a special occasion or enjoying a casual meal, we&apos;re here to make it unforgettable.</p>
      <button data-aos='zoom-in'>
        <Link href="/about">About us</Link>
      </button>
    </Section>
  )
}
