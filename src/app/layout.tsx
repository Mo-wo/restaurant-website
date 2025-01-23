import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/lvl1/Navbar";
import { BackToTop } from "@/components/lvl1/BackToTop";
import { ThemeSwitcher } from "@/components/lvl1/ThemeSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant Website",
  description: "Customisable website for restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme='dark'>
          <Navbar />
          {children}
          <BackToTop />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
