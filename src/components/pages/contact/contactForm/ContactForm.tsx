import React from 'react';
import { Section } from '@/components/lvl1/section/Section';
import styles from './contactForm.module.css';
import ImageComponent from '@/components/lvl2/image/Image';
import contactImage from '@/assets/images/contactImage.svg';
import { Button, LinkButton } from '@/components/lvl2/button/Button';

export default function ContactForm() {
  return (
    <Section color='white' contentContainerStyle={styles.sectionWrapper}>
      <div className={styles.formContainer}>
        <ImageComponent src={contactImage} alt={``} className={styles.image} />
        <form className={styles.form}>
          <h2>Send us a message</h2>

          <div className={styles.inputContainer}>

            <label htmlFor='name' className={styles.label}> Name
              <input name='name' id='name' type='text' className={styles.input} />
            </label>
            <label htmlFor='phone' className={styles.label}>Email
              <input name='email' id='email' type='email' className={styles.input} />
            </label>
            <label htmlFor='phone' className={styles.label}>Phone
              <input name='phone' id='phone' type='tel' className={styles.input} />
              </label>
              <label htmlFor='message' className={styles.label}>Message
                <textarea rows={5} className={`${styles.input} ${styles.textarea}`}></textarea>
              </label>
          </div>

          <Button text='Submit' type="submit" />
        </form>
      </div>

      <div className={styles.ctaSection}>
        <h2>DON&apos;T JUST BROWSE - INDULGE</h2>
        <p>Order online for quick and delicious delivery straight to your door</p>
        <LinkButton href='/gallery/menu' text={'Order Now'} />
      </div>
    </Section>
  )
}
