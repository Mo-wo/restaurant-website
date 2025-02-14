export interface MenuItem {
  id: string;
  img: any;
  name: string;
  desc: string;
  price: string;
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
