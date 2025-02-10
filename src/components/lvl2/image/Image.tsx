import React from 'react';
import Image from 'next/image';
import styles from './image.module.css';

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, className }) => {
  return (
    <div className={`${styles.imgWraper} ${className}`} data-aos='zoom-in-up'>
      <Image src={src} alt={alt} style={{width: '100%', height: '100%'}} placeholder='blur' blurDataURL='#f7a148' />
    </div>
  );
};

export default ImageComponent;
