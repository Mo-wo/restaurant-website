import { useEffect } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/lvl2/Navbar/Navbar";
import { BackToTop } from "@/components/lvl1/BackToTop";
import { ThemeSwitcher } from "@/components/lvl1/ThemeSwitcher";
import AOS from "aos";
import "aos/dist/aos.css";
import { app_text } from "@/constants/constants";
import Head from "next/head";

export const metadata: Metadata = {
  title: app_text.name,
  applicationName: app_text.name,
  description: app_text.description,
  authors: [{ name: app_text.author, url: app_text.url }],
  keywords: app_text.globalKeywords,
  alternates: { canonical: app_text.url },
  generator: "Next.js",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  referrer: "origin",
  creator: app_text.creator,
  openGraph: {
    type: "website",
    url: app_text.url,
    title: app_text.name,
    description: app_text.description,
    siteName: app_text.name,
    images: [
      {
        url: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": app_text.type,
              name: app_text.name,
              url: app_text.url,
              address: {
                "@type": "PostalAddress",
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
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          {children}
          <BackToTop />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
