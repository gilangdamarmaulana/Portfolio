import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./footer";
import "./globals.css";
import { Navbar } from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gilang Damar Maulana",
  description: "Portofolio Gilang Damar Maulana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-800`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
