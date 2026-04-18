import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display, Dancing_Script } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' });

export const metadata: Metadata = {
  title: 'Happy Birthday raww Maggie 🌸',
  description: 'A heartfelt celebration of our friendship',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dancing.variable} bg-background`}>
      <body className="font-sans antialiased bg-linear-to-b from-pink-50 via-purple-50 to-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
