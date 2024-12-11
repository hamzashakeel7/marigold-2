import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marigold Accommodations",
  description: "Your luxurious stay awaits at Marigold Accommodations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ProgressBar />
          <div className="bg-[#EEEEEE] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
