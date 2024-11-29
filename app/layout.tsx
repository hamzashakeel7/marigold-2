import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marigold Accommodations",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar />
        <div className="bg-[#EEEEEE]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
