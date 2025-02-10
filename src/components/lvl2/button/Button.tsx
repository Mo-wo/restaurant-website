import React, { ButtonHTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';
import styles from './button.module.css';


interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'>  {
  text: string;
  btnStyle?: string;
  marginTop?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, btnStyle, marginTop, ...buttonProps }) => {
  return (
    <button className={`${styles.button} ${btnStyle}`} style={{marginTop: marginTop ?? '50px'}} {...buttonProps}>
      {text}
    </button>
  );
};

interface LinkButtonProps extends LinkProps {
  text: string;
  href: string;
  linkStyle?: string;
  marginTop?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ text, href, linkProps,  linkStyle, marginTop }) => {
  return (
    <Link href={href} className={`${styles.link} ${linkStyle}`} style={{marginTop: marginTop ?? '50px'}} {...linkProps}>
      {text}
    </Link>
  );
};
