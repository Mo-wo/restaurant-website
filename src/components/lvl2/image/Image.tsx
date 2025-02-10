import React from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './image.module.css';

interface ImageComponentProps extends ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, className, ...imageProps }) => {
  return (
    <div className={`${styles.imgWraper} ${className}`} data-aos='zoom-in-up'>
      <Image src={src} alt={alt} style={{width: '100%', height: '100%'}} placeholder='blur' blurDataURL='#f7a148' {...imageProps} />
    </div>
  );
};

export default ImageComponent;
