import Image from 'next/image';
import styles from './backgroundImage.module.css';

interface BackgroundImageProps {
  src: string;
  alt: string;
  style?: string;
  imgStyle?: string;
  children?: React.ReactNode;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt, style, imgStyle, children }) => {
  return (
    <div role='complementary' className={`${styles.backgroundWrapper} ${style}`}>
      <Image
        src={src}
        alt={alt}
        priority={true}
        className={imgStyle}
      />
      {children}
    </div>
  );
};
