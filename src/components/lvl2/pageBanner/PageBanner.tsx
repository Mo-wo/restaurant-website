import styles from './pageBanner.module.css';

interface PageBannerProps {
  style?: string;
  children?: React.ReactNode;
  heading: string;
  desc: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({style, children, heading, desc }) => {
  return (
    <section role='complementary' className={`${styles.backgroundWrapper} ${style}`}>
        <article className={styles.article}>
          <h2 className={styles.h2}>{heading}</h2>
          <p>{desc}</p>
        </article>
      {children}
    </section>
  );
};
