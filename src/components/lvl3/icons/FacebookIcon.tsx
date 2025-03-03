import React from 'react';

interface FacebookIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({ width, height }) => (

  <svg width={width ?? "20"} height={height ?? "20"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.5 30C24.232 30 30.5 23.732 30.5 16C30.5 8.26801 24.232 2 16.5 2C8.76801 2 2.5 8.26801 2.5 16C2.5 23.732 8.76801 30 16.5 30Z" fill="url(#paint0_linear_123_4264)"/>
  <path d="M21.7137 20.2816L22.3356 16.3301H18.4452V13.767C18.4452 12.6857 18.9877 11.6311 20.7302 11.6311H22.5V8.26699C22.5 8.26699 20.8945 8 19.3603 8C16.1548 8 14.0617 9.89294 14.0617 13.3184V16.3301H10.5V20.2816H14.0617V29.8345C14.7767 29.944 15.5082 30 16.2534 30C16.9986 30 17.7302 29.944 18.4452 29.8345V20.2816H21.7137Z" fill="white"/>
  <defs>
  <linearGradient id="paint0_linear_123_4264" x1="16.5" y1="2" x2="16.5" y2="29.917" gradientUnits="userSpaceOnUse">
  <stop stopColor="#18ACFE"/>
  <stop offset="1" stopColor="#0163E0"/>
  </linearGradient>
  </defs>
  </svg>
);

export default FacebookIcon;
