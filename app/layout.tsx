import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Little Village Restaurant | Authentic Andhra Flavours',
  description: 'Premium family dining experience in Mangalagiri. Authentic Andhra cuisine, biryani, and more in a luxury atmosphere. 4.2 Stars from 12,000+ reviews.',
  keywords: 'Little Village Restaurant, Mangalagiri, Andhra Cuisine, Biryani, Family Restaurant, South Indian, Fine Dining',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
