'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Section } from '@/components/lvl1/section/Section';
import { SearchFilter } from '../searchFilter/SearchFilter';
import { MenuCategoryCard } from '../menuCategoryCard/MenuCategoryCard';
import { Pagination } from '../pagination/Pagination';

type MenuCategoryPageProps = {
  pathname: string;
  categoryData: any;
}

export const MenuCategoryPage: React.FC<MenuCategoryPageProps> = ({ pathname, categoryData }) => {
  const data = categoryData.data;
  const [searchQuery, setSearchQuery] = useState<any>('');
  const [filterType, setFilterType] = useState<string>('');
  const [filteredData, setFilteredData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;
  // const itemsPerPage = filteredData?.length;
  // const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const totalPages = categoryData.totalPages;
  

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (type: string) => {
    setFilterType(type); 
  }

  const filteredSearchData = useMemo(() => {
    if (!searchQuery && !filterType) return data;
    console.log('I ran', 'filterType', filterType)

    let filtered = [...data];

    if (searchQuery) {
    const query = searchQuery.toLowerCase();
      filtered =  filtered.filter((item: any) => item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query));
    };

    if (filterType === 'popular') {
      filtered = filtered.filter((item: any) => item.popular === true);
    } else if (filterType === 'new') {
      filtered = filtered.filter((item: any) => item.new === true);
    } else if (filterType === 'price') {
      filtered = filtered.sort((b: any, a: any) => a.price - b.price);
    }

    return filtered;
  }, [searchQuery, filterType, data]);

  useEffect(() => {
    setFilteredData(filteredSearchData);
  }, [filteredSearchData]);

  useEffect(() => {
      if (currentPage > totalPages) {
        setCurrentPage(Math.max(totalPages, 1));
      }
  }, [filteredData?.length, currentPage]);

  const paginatedData = useMemo(() => {
    if(!searchQuery && !filterType) return data;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData?.slice(startIndex, endIndex);
  }, [filteredData, currentPage]);


  console.log('totalPages', totalPages);
  console.log('currentPage', currentPage);
  console.log(filteredData)

  return (
    <Section color='white'>
      <SearchFilter
        query={searchQuery}
        onSearch={onSearch}
        onFilterChange={handleFilterChange}
        activeFilter={filterType}
      />
      <section>
        {filteredData ? (
          <>
          {filteredData.map((item: any, index: number) => (
          <MenuCategoryCard key={index.toString()} item={item} pathname={pathname} />))}
        </>
        ) : (
          <p>loading...</p>
        )}
      
      </section>
      <section>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </section>
    </Section>
  )
}
