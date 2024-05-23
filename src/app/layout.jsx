import "./globals.css";
import { Footer, Navbar } from "@/components";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Riyan Nugraha | Frontend Developer",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
