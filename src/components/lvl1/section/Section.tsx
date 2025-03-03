import React, { HTMLAttributes } from "react";
import styles from "./section.module.css";

type Props = {
  children: React.ReactNode;
  sectionStyle?: string;
  contentContainerStyle?: string;
  color: string;
} & HTMLAttributes<HTMLDivElement>;

export const Section:React.FC<Props> = ({ sectionStyle, contentContainerStyle, children, color, ...props}) => {

  return (
    <section className={`${styles.section} ${sectionStyle} ${styles[color]}`} {...props}>
      <div className={`${styles.contentWrapper} ${contentContainerStyle}`}>
        {children}
      </div>
    </section>
  );
};
