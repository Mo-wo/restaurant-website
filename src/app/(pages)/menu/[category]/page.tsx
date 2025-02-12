'use client';
import React from 'react';
import { PageBanner } from '@/components/lvl2/banner/pageBanner/PageBanner';
import { MenuCategoryPage } from '@/components/lvl3/menuCategoryPage/MenuCategoryPage';
import { useParams, usePathname } from 'next/navigation';
import { menuData } from '@/data/menuData';

export default function MenuCategory() {
  const pathname = usePathname();
  const { category } = useParams();
  console.log(category);

  const categoryData = menuData[category as string];

  if (!categoryData) return <h1>Menu Category not Found</h1>

  return (
    <>
      <PageBanner
        heading={'APPETISERS TO TEMPT YOUR TASTE BUDS'}
        desc={'Start your meal right with our carefully crafted appetisers, full of flavor and freshness'}
        />
        <MenuCategoryPage pathname={pathname} categoryData={categoryData} />
    </>
  )
}
