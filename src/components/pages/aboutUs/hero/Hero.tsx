import { Section } from '@/components/lvl1/section/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <Section color={'white'}>
      <h2>About Us</h2>
      <article>
        <p>At [Restaurant Name], we turn every meal into a celebration of flavors, culture, and connection. Using fresh, high-quality ingredients, we craft dishes that delight your senses and make every visit unforgettable.</p>
        <p>From our welcoming atmosphere to bold and classic flavors, we&apos;re here to create exceptional dining experiences. Whether it&apos;s a special occasion or a casual treat, our heartfelt hospitality ensures every moment is memorable.</p>
        <br/>
        <p>[Restaurant Name] {'–'} Where Great Food Meets Great Moments.</p>
      </article>

      <div>
        <Image src={''} alt={''} className={''} />

        <div>
          <h2>Step into our world</h2>
            <button>
              <Link href='/gallery/tour'> More pictures</Link>
            </button>
        </div>
      </div>
    </Section>
  )
}
