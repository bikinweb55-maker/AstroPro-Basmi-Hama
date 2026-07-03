// Site configuration
export const SITE = {
  title: 'Beranda',
  description: 'Jasa Pembasmi Hama dan Pest Control.',
  url: 'https://yourdomain.com',
  author: 'AstroFlow',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Layanan Kami', href: '/layanan' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Kontak', href: '/facilities' },
  { name: 'Blog', href: '/blog' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

