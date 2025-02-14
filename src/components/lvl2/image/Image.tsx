import React from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import styles from './image.module.css';

interface ImageComponentProps extends ImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  animation?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, className, animation,  ...imageProps }) => {
  return (
    <div className={`${styles.imgWraper} ${className}`} data-aos={animation ?? 'zoom-in-up'}>
      <Image src={src} alt={alt} style={{width: '100%', height: '100%'}} placeholder='blur' blurDataURL='#f7a148' {...imageProps} />
    </div>
  );
};

export default ImageComponent;
