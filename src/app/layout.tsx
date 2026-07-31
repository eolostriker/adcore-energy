import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Link from 'next/link';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADCORE Energy - Soluções em Energia Solar',
  description: 'A premium web application for a solar energy solutions company, featuring specialized sections for about us, services, and contact information with a modern, high-tech aesthetic.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <GoogleTagManager gtmId="GTM-MTG9ZTBM" />
      </head>
      <body className={`${inter.className} text-slate-700 selection:bg-emerald-500 selection:text-white bg-white`}>
        {/* <GoogleTagManager gtmId="GTM-MTG9ZTBM" /> */}
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />

          {/* Floating Action Button for Contact (Mobile) */}
          <div className="fixed bottom-8 right-8 md:hidden z-40">
            <Link
              href="/contato"
              className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-transform border-4 border-emerald-500/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
