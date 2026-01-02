export interface SubMenuItem {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: SubMenuItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    path: '/about',
    subItems: [
      { label: 'Chairman Message', path: '/about/chairman-message' },
      { label: 'Profile', path: '/about/profile' },
      { label: 'Our Vision', path: '/about/our-vision' },
      { label: 'Management', path: '/about/management' },
    ],
  },
  {
    label: 'Projects',
    path: '/projects',
    subItems: [
      { label: 'Ongoing Projects', path: '/projects/ongoing' },
      { label: 'Executed Projects', path: '/projects/executed' },
    ],
  },
  {
    label: 'Media',
    path: '/media',
    subItems: [
      { label: 'News and Events', path: '/media/news-events' },
      { label: 'Gallery', path: '/media/gallery' },
    ],
  },
  {
    label: 'Careers',
    path: '/careers',
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
];
