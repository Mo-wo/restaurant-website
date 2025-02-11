import React from 'react';
import { LinkButton } from '@/components/lvl2/button/Button';
import styles from './cta.module.css';
import { Section } from '@/components/lvl1/section/Section';

interface CtaProps {
  headingText: string;
  infoText?: string;
  href: string;
  linkText: string;
}

export const Cta: React.FC<CtaProps> = ({ headingText, href, linkText, infoText }) => {
  return (
    <div color='white' className={styles.ctaSection}>
      <article>
        <h2>{headingText}</h2>
        {infoText && <p>{infoText}</p>}
      </article>

      <LinkButton href={href} text={linkText} marginTop={infoText ? '30px' : '0'} />
    </div>
  )
}
