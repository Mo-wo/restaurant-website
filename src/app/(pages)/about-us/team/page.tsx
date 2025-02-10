import React from 'react';
import { PageBanner } from '@/components/lvl2/banner/pageBanner/PageBanner';
import { Leaders } from '@/components/pages/team/leaders/Leaders';

export default function Team() {
  return (
    <>
      <PageBanner heading={'MEET OUR TEAM'} desc={'The passionate people behind your favorite meals'} />
      <Leaders />
    </>
  )
}
