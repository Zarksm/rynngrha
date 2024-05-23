import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Riyan Nugraha | Frontend Developer",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
