import React from 'react';
import { PageBanner } from '@/components/lvl2/banner/pageBanner/PageBanner';
import { Team } from '@/components/pages/team/Team';

export default function TeamPage() {
  return (
    <>
      <PageBanner heading={'MEET OUR TEAM'} desc={'The passionate people behind your favorite meals'} />
      <Team />
    </>
  )
}
