import { StaticImageData } from 'next/image';

export interface MenuItem {
  id: string;
  img: StaticImageData;
  name: string;
  desc: string;
  price: number;
  popular: boolean;
  new: boolean;
}

export interface MenuCategory {
  heading: string;
  description: string;
  totalPages: number;
  data: MenuItem[];
}

export interface MenuCategoryData {
    [key: string]: MenuCategory;
}
