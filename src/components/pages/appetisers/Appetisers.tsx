'use client';
import React from 'react'
import { MenuCategoryPage } from '@/components/lvl3/menuCategoryPage/MenuCategoryPage'
import { appetisers } from '@/data/menuData';
import { usePathname } from 'next/navigation';

export const Appetisers = () => {
  const pathname = usePathname();
  
  return (
    <MenuCategoryPage data={appetisers} pathname={pathname} />
  )
}
