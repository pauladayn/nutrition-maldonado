import type { Metadata } from 'next';
import Navbar from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Contact from '@/components/Contact/Contact';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nutri&Vita',
  description: 'Nutrición integral',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Contact />
        <main className="flex min-h-screen flex-col bg-neutral ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

