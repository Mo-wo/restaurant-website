import React from 'react'
import { Section } from '@/components/lvl1/section/Section'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowDropright } from "react-icons/io";
import styles from './leaders.module.css';
import { team } from '@/data/data';
import ImageComponent from '@/components/lvl2/image/Image';


export const Leaders = () => {

  return (
    <Section color={'white'} contentContainerStyle={styles.sectionWrapper}>
        <h2 data-aos='zoom-in' style={{textAlign: 'center'}}>OUR LEADERSHIP</h2>

      <div className={styles.container}>
        {team.slice(0, 3).map((staff, index) => (
          <div key={index.toString()} className={styles.wrapper}>
            <ImageComponent src={staff.image} alt={`${staff.title}'s-photo`} className={styles.image} />
            {/* <div>
              <Image src={staff.image} alt={`${staff.title}'s-img`} style={{width: '100%', height: '100%'}} />
            </div> */}
          </div>
        ))}
      </div>
    </Section>
  )
}
