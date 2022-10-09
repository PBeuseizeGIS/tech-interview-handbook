import type { ProductNavigationItems } from '~/components/global/ProductNavigation';

const navigation: ProductNavigationItems = [
  { href: '/offers', name: 'Home' },
  { href: '/submit', name: 'Benchmark your offer' },
];

const config = {
  navigation,
  showGlobalNav: false,
  title: 'Tech Offers Repo',
};

export default config;
