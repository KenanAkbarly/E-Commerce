import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow bg-gray-50">
          {children}
          </main>
        <Footer/>
        </div>
        </body>
    </html>
  );
}
