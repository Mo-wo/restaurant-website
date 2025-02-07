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
    <div className={`${className} ${styles.imgWraper}`} data-aos='zoom-in-up'>
      <Image src={src} alt={alt} layout='responsive' style={{width: '100%', height: '100%'}} />
    </div>
  );
};

export default ImageComponent;
