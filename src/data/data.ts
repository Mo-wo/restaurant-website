import staff1 from '@/assets/images/aboutUsImages/staff1.svg';
import staff2 from '@/assets/images/aboutUsImages/staff2.svg';
import staff3 from '@/assets/images/aboutUsImages/staff3.svg';
import staff4 from '@/assets/images/aboutUsImages/staff4.svg';
import staff5 from '@/assets/images/aboutUsImages/staff5.svg';
import staff6 from '@/assets/images/aboutUsImages/staff6.svg';
import signatureDish1 from '@/assets/images/aboutUsImages/signatureDish1.svg';
import signatureDish2 from '@/assets/images/aboutUsImages/signatureDish2.svg';

export const navItems = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Menu', path: '/menu' },
  { id: 3, name: 'Gallery', path: '/gallery/menu' },
  { id: 4, name: 'About us', path: '/about-us' },
  { id: 5, name: 'Contact', path: '/contact' },
  { id: 6, name: 'Reservation', path: '/reservation' }
];

export const menuDropdownData = [
  {
    id: '1',
    name: 'Breakfast',
    path: '/menu/breakfast',
  },
  {
    id: '2',
    name: 'Lunch',
    path: '/menu/lunch',
  },
  {
    id: '3',
    name: 'Dinner',
    path: '/menu/dinner',
  },
  {
    id: '4',
    name: 'Appetisers',
    path: '/menu/appetisers',
  },
  {
    id: '5',
    name: 'Main Courses',
    path: '/menu/main-courses',
  },
  {
    id: '6',
    name: 'Deserts',
    path: '/menu/deserts',
  },
  {
    id: '7',
    name: 'Drinks',
    path: '/menu/drinks',
  }
];

export const galleryDropdownData = [
  {
    id: '1',
    name: 'Menu',
    path: '/gallery/menu',
  },
  {
    id: '2',
    name: 'Interior',
    path: '/gallery/interior',
  }
];

// dummy team data
export const team = [
  {
    id: '1',
    name: 'JAMES LAWSON',
    title: 'Head Chef',
    image: staff1
  },
  {
    id: '2',
    name: 'EMIL CARTER',
    title: 'General Manager',
    image: staff2
  },
  {
    id: '3',
    name: 'SOPHIA NGUYEN',
    title: 'Restaurant Manager',
    image: staff3
  },
  {
    id: '4',
    name: 'MICHAEL BROOKS',
    title: 'Sous Chef',
    image: staff4
  },
  {
    id: '5',
    name: 'OLIVIA PEREZ',
    title: 'Hospitality Coordinator',
    image: staff5
  },
  {
    id: '6',
    name: 'GBENGA OJO',
    title: 'Staff Manager',
    image: staff6
  },
];


export const signatureDishes = [
  {
    id: '1',
    name: 'Jollof Rice',
    desc: 'A bold fusion of spices and flavors, served with tender, perfectly grilled chicken.',
    image: signatureDish1
  },
  {
    id: '2',
    name: 'Classic Seafood Pasta',
    desc: 'Freshly caught seafood tossed in a rich, creamy sauce with pasta.',
    image: signatureDish2
  },
]
