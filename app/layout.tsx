import './globals.css';
import Navbar from './components/Navbar/index';
import { Footer } from "./components";
import ScrollToTop from "./components/scroll-to-top/index";
import { Providers } from "./providers";
export const metadata = {
  title: "Ella Homes",
  description:
    "For Mombasa house hunting, choose Ella Homes as your ultimate solution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">
        <Navbar />
        <Providers>{children}</Providers>
        <ScrollToTop />

        <Footer />
      </body>
    </html>
  );
}
