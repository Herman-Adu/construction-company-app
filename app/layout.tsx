import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/modules/Footer";
import { NavigationLargeScreens } from "@/modules/Nav/NavigationLargeScreens";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contractor App",
  description: "Construction Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationLargeScreens />
        {children}
        <Footer />
      </body>
    </html>
  );
}
