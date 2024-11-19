import { Metadata } from 'next';

export const metadata = {
  title: 'Nekcy | Agência de Desenvolvimento Web & Design Digital',
  description: 'Transforme sua presença digital com sites modernos e landing pages de alto impacto.',
  keywords: [
    'desenvolvimento web',
    'criação de sites',
    'landing pages',
    'web design',
    'UI/UX design',
    'desenvolvimento frontend',
    'sites responsivos',
    'next.js',
    'react',
    'aplicações web',
    'agência digital'
  ].join(', '),
  authors: [{ name: 'Nekcy Team' }],
  creator: 'Nekcy',
  publisher: 'Nekcy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Nekcy | Web Development & Digital Design',
    description: 'Transforme sua presença digital com sites modernos e landing pages de alto impacto.',
    type: 'website',
    url: 'https://nekcy.com',
    siteName: 'Nekcy',
    locale: 'pt-BR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nekcy | Desenvolvimento Web & Design Digital',
    description: 'Transforme sua presença digital com sites modernos e landing pages de alto impacto.',
    creator: '@nekcy',
    images: ['/twitter-nekcy.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/nekcy-logo.svg',
    shortcut: '/nekcy-logo.svg',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};