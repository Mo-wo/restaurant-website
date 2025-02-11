import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/lvl2/Navbar/Navbar';
import { app_text } from '@/constants/constants';
import Head from 'next/head';
import AOSInitializer from './AOSInitialiser';
import Footer from '@/components/lvl2/footer/Footer';
import { DiscountButton } from '@/components/lvl1/discountButton/DiscountButton';

export const metadata: Metadata = {
  title: app_text.name,
  applicationName: app_text.name,
  description: app_text.description,
  authors: [{ name: app_text.author, url: app_text.url }],
  keywords: app_text.globalKeywords,
  alternates: { canonical: app_text.url },
  generator: 'Next.js',
  robots: 'index, follow',
  referrer: 'origin',
  creator: app_text.creator,
  openGraph: {
    type: 'website',
    url: app_text.url,
    title: app_text.name,
    description: app_text.description,
    siteName: app_text.name,
    images: [
      {
        url: '',
      },
    ],
  },
};

export const viewport = 'width=device-width, initial-scale=1.0';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en' suppressHydrationWarning>
      <Head>
        <meta name='viewport' content={viewport} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': app_text.type,
              name: app_text.name,
              url: app_text.url,
              address: {
                '@type': 'PostalAddress',
                streetAddress: app_text.street_address,
                addressLocality: app_text.addressLocality,
                postalCode: app_text.postalCode,
                addressCountry: app_text.country,
              },
              servesCuisine: app_text.cuisine,
              priceRange: app_text.priceRange,
            }),
          }}
        />
      </Head>
      <body>
        <ThemeProvider defaultTheme='light' attribute='class'>
          <AOSInitializer />
          <Navbar />
          <main className="main">
            {children}
          </main>
            <DiscountButton />
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
