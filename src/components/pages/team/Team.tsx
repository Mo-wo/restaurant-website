import React from 'react'
import { Section } from '@/components/lvl1/section/Section'
import styles from './team.module.css';
import { chefs, leaders, staff } from '@/data/data';
import ImageComponent from '@/components/lvl2/image/Image';
import { Cta } from '@/components/lvl3/cta/Cta';


export const Team = () => {

  return (
    <>
    <Section color={'white'} contentContainerStyle={styles.sectionWrapper}>
        <h2 data-aos='zoom-in' style={{textAlign: 'center'}}>OUR LEADERSHIP</h2>

      <div className={styles.container}>
        {leaders.map((leader, index) => (
          <div key={index.toString()} className={styles.wrapper}>
            <ImageComponent src={leader.image} alt={`${leader.title}'s-photo`} className={styles.image} />
            <article className={styles.article}>
              <h3>{leader.name}</h3>
              <p>{leader.title}</p>
            </article>
          </div>
        ))}
      </div>
    </Section>
    <Section color={'black'} contentContainerStyle={styles.sectionWrapper}>
        <h2 data-aos='zoom-in' style={{textAlign: 'center'}}>MEET OUR CHEFS</h2>

      <div className={styles.container}>
        {chefs.map((chef, index) => (
          <div key={index.toString()} className={styles.wrapper}>
            <ImageComponent src={chef.image} alt={`${chef.title}'s-photo`} className={styles.image} />
            <article className={styles.article}>
              <h3>{chef.name}</h3>
              <p>{chef.title}</p>
            </article>
          </div>
        ))}
      </div>
    </Section>
    <Section color={'white'} contentContainerStyle={styles.sectionWrapper}>
        <h2 data-aos='zoom-in' style={{textAlign: 'center'}}>THE HEART OF OUR SERVICE</h2>

      <div className={styles.container}>
        {staff.map((staff, index) => (
          <div key={index.toString()} className={styles.wrapper}>
            <ImageComponent src={staff.image} alt={`${staff.title}'s-photo`} className={styles.image} />
            <article className={styles.article}>
              <h3>{staff.name}</h3>
              <p>{staff.title}</p>
            </article>
          </div>
        ))}
      </div>

      <Cta headingText='WANT TO JOIN OUR TEAM' href={'/contact'} linkText={'APPLY NOW'} />
    </Section>
    </>
  )
}
