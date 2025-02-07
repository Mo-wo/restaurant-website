import Image from 'next/image';
import styles from './homeBanner.module.css';

interface HomeBannerProps {
  src: string;
  alt: string;
  style?: string;
  imgStyle?: string;
  children?: React.ReactNode;
}

export const HomeBanner: React.FC<HomeBannerProps> = ({ src, alt, style, imgStyle, children }) => {
  return (
    <div role='complementary' className={`${styles.backgroundWrapper} ${style}`}>
      {src && <Image
        src={src}
        alt={alt}
        priority={true}
        className={imgStyle}
      />}
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
};
