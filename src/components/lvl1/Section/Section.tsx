import React, { HTMLAttributes } from "react";
import styles from "styles/section.module.css";

type Props = {
  children: React.ReactNode;
  sectionStyle?: any;
  color: string;
} & HTMLAttributes<HTMLDivElement>;

export const Section:React.FC<Props> = ({ sectionStyle, children, color, ...props}) => {

  return (
    <section className={`${styles.section} ${sectionStyle} ${styles[color]}`} {...props}>
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </section>
  );
};
