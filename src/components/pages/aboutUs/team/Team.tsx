import React from 'react'
import { Section } from '@/components/lvl1/section/Section'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowDropright } from "react-icons/io";
import styles from './team.module.css';
import { team } from '@/data/data';
import ImageComponent from '@/components/lvl2/image/Image';


export default function Team() {

  return (
    <Section color={'black'} contentContainerStyle={styles.sectionWrapper}>
      <header data-aos='zoom-in' className={styles.header}>
        <h2>Meet our team</h2>
        <IoMdArrowDropright size={30} />
      </header>

      <div className={styles.container}>
        {team.map((staff, index) => (
          <div key={index.toString()} className={styles.wrapper}>
            <ImageComponent src={staff.image} alt={`${staff.title}'s-photo`} className={styles.image} />
            {/* <div>
              <Image src={staff.image} alt={`${staff.title}'s-img`} style={{width: '100%', height: '100%'}} />
            </div> */}

            <article className={styles.article}>
              <h3>{staff.name}</h3>
              <p>{staff.title}</p>
            </article>
          </div>
        ))}
      </div>
    </Section>
  )
}
