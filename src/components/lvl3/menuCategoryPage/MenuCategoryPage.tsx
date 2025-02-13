'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Section } from '@/components/lvl1/section/Section';
import { SearchFilter } from '../searchFilter/SearchFilter';
import { MenuCategoryCard } from '../menuCategoryCard/MenuCategoryCard';
import { Pagination } from '../pagination/Pagination';
import styles from './menuCategoryPage.module.css';
import { ThreeDots } from 'react-loader-spinner'

type MenuCategoryPageProps = {
  pathname: string;
  categoryData: any;
  category: string
}

export const MenuCategoryPage: React.FC<MenuCategoryPageProps> = ({ pathname, categoryData, category }) => {
  const data = categoryData.data;
  const [loading, setLoading] = useState<boolean>(false);
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
    setLoading(true); 
    const timeoutId = setTimeout(() => {
      setFilteredData(filteredSearchData);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [filteredSearchData]);


  // useEffect(() => {
  //     if (currentPage > totalPages) {
  //       setCurrentPage(Math.max(totalPages, 1));
  //     }
  // }, [filteredData?.length, currentPage]);

  // const paginatedData = useMemo(() => {
  //   if(!searchQuery && !filterType) return data;
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   return filteredData?.slice(startIndex, endIndex);
  // }, [filteredData, currentPage]);


  return (
    <Section color='white'>
      <SearchFilter
        query={searchQuery}
        onSearch={onSearch}
        onFilterChange={handleFilterChange}
        activeFilter={filterType}
      />
      <section className={styles.cardContainer}>
        {loading ? (
          <div className={styles.noContentWrapper}>
            <ThreeDots 
              visible={loading}
              height="80"
              width="80"
              color={'#FF6347'}
              radius='9'
              ariaLabel='three-dots-loading'
              />
          </div>
          ) : filteredData?.length === 0 ? (
          <div className={styles.noContentWrapper}>
            <p>{category} menu coming soon</p>
          </div>
        ) : (
          <>
          {filteredData?.map((item: any, index: number) => (
          <MenuCategoryCard key={index.toString()} item={item} pathname={pathname} />))}
        </>
        )}
      
      </section>
      <section>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </section>
    </Section>
  )
}
