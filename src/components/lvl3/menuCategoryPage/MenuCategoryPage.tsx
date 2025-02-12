import React, { useState } from 'react'
import { Section } from '@/components/lvl1/section/Section'
import { SearchFilter } from '../searchFilter/SearchFilter'
import { MenuCategoryCard } from '../menuCategoryCard/MenuCategoryCard'
import { Pagination } from '../pagination/Pagination'

type MenuCategoryPageProps = {
  data: any[];
  pathname: string;
}

export const MenuCategoryPage: React.FC<MenuCategoryPageProps> = ({ data, pathname }) => {
  const [pages, setPages] = useState<any[] | null>(null);

  const handlePageChange = (page: number) => {
    // setPages(page + 1)
  }

  return (
    <Section color='white'>
      <SearchFilter
        query={''}
        onSearch={() => undefined}
        onPriceFilter={() => undefined}
        onPopularFilter={() => undefined}
        onNewestFilter={() => undefined}
      />
      <section>
        {data.map((item, index) => (
          <MenuCategoryCard key={index.toString()} item={item} pathname={pathname} />
        ))}
      </section>
      <section>
        <Pagination totalPages={6} currentPage={1} onPageChange={handlePageChange} />
      </section>
    </Section>
  )
}
