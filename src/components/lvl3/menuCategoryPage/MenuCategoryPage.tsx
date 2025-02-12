import React, { useState } from 'react'
import { Section } from '@/components/lvl1/section/Section'
import { SearchFilter } from '../searchFilter/SearchFilter'
import { MenuCategoryCard } from '../menuCategoryCard/MenuCategoryCard'
import { Pagination } from '../pagination/Pagination'

type MenuCategoryPageProps = {
  pathname: string;
  categoryData: any;
}

export const MenuCategoryPage: React.FC<MenuCategoryPageProps> = ({ pathname, categoryData }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [appetisersData, setAppetisersData] = useState<any>(categoryData.data)
  const itemsPerPage = categoryData.totalPages;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
        {categoryData.data.map((item: any, index: number) => (
          <MenuCategoryCard key={index.toString()} item={item} pathname={pathname} />
        ))}
      </section>
      <section>
        <Pagination totalPages={itemsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
      </section>
    </Section>
  )
}
