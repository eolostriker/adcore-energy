import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Link from 'next/link';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://adcoreenergy.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'ADCORE Energy | Soluções em Energia Solar',

  description:
    'A ADCORE Energy oferece soluções em energia solar fotovoltaica, com projetos personalizados para economia na conta de luz, eficiência energética e sustentabilidade. Conheça nossas soluções e solicite uma avaliação técnica pelo WhatsApp!',

  applicationName: 'ADCORE Energy',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'ADCORE Energy',
    title: 'ADCORE Energy | Soluções em Energia Solar',

    description:
      'Projetos de energia solar fotovoltaica personalizados para quem busca economia, eficiência e sustentabilidade. Conheça a ADCORE Energy e solicite sua avaliação técnica!',

    images: [
      {
        url: '../../public/images/adcore-social.png',
        width: 1200,
        height: 630,
        alt: 'ADCORE Energy - Soluções em Energia Solar',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ADCORE Energy | Soluções em Energia Solar',

    description:
      'Conheça nossas soluções em energia solar fotovoltaica e solicite uma avaliação técnica!',

    images: ['../../public/images/adcore-social.png'],
  },

  robots: {
    index: true,
    follow: true,
  }
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
