import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';


interface ButtonProps {
  text: string;
  href: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  btnStyle?: string;
  marginTop?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, buttonProps, btnStyle, marginTop }) => {
  return (
    <button className={`${styles.button} ${btnStyle}`} style={{marginTop: marginTop ?? '50px'}} {...buttonProps}>
      {href ? (
        <Link href={href}>
          {text}
        </Link>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
