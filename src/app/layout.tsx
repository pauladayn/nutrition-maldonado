import type { Metadata } from 'next';
import { Dela_Gothic_One } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Contact from '@/components/Contact/Contact';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nutri&Vita',
  description: 'Nutrición integral',
};

const delta = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-delta',
  display: 'swap',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang='en'>
      <body>
        <Navbar />
        <div className='flex-col bg-scroll bg-auto bg-center'>
        </div>
        <Contact />
        <main className='flex min-h-screen flex-col bg-neutral'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
