import Footer from "@/components/lvl2/Footer/Footer";
import { Navbar } from "@/components/lvl2/Navbar/Navbar";
import dynamic from "next/dynamic";
// const LandingHeader = dynamic(
//   () => import('@/lib/layout/landing/header'),
//   { ssr: false }
// )


export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex",  minHeight: "100vh", flexDirection: "column", position:'relative' }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
