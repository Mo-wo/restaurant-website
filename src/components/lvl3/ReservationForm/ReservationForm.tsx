import { Button } from '@/components/lvl2/button/Button';
import styles from './reservationform.module.css';


export const ReservationForm = () => {
  return (
    <form className={styles.form}>
      <div role='complementary' className={styles.formHeadingContainer}>
      <h2 className={styles.formHeading} style={{marginBottom: 0}}>RESERVE YOUR TABLE <br/> TODAY - DELIGHT AWAITS</h2>
      </div>

      <p className={styles.infoText}>
      Secure your spot for an unforgettable dining experience. Whether it&apos;s a casual meal or a special celebration, we&apos;ve got you covered
      </p>

      <div role='complementary' className={styles.formInputContainer}>
        <div role='complementary' className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='name'>Name</label>
          <input className={styles.input} type='text' id='name' name='name' />
        </div>

        <div role='complementary' className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='contact'>Contact</label>
          <input className={styles.input} type='tel' id='contact' name='contact'  />
        </div>

        <div role='complementary' className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='date'>Date</label>
          <input className={styles.input} type='date' id='date' name='date' />
        </div>

        <div role='complementary' className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='guests'>Party Size</label>
          <input className={styles.input} type='number' id='guests' name='guests' />
        </div>

        <Button text='Book Now' type='submit' className={styles.formBtn} />
      </div>
    </form>
  );
}
