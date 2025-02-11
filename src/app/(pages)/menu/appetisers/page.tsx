import React from 'react';
import { PageBanner } from '@/components/lvl2/banner/pageBanner/PageBanner';
import { Appetisers } from '@/components/pages/appetisers/Appetisers';

export default function AppetisersPage() {
  return (
    <>
      <PageBanner
        heading={'APPETISERS TO TEMPT YOUR TASTE BUDS'}
        desc={'Start your meal right with our carefully crafted appetisers, full of flavor and freshness'}
        />
        <Appetisers />
    </>
  )
}
