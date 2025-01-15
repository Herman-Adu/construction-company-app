import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/modules/Footer";
import { NavigationLargeScreens } from "@/modules/Nav/NavigationLargeScreens";
import { Navigation } from "@/modules/Nav/Navigation";
import { AnimatedMobileNavigation } from "@/modules/Nav/AnimatedMobileNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Construction Company",
    template: "%s - Construction Company",
  },
  description:
    "Come and see who we are and the construction services we provide. Catch up with our latest projects and articles!",
  twitter: {
    card: "summary_large_image",
  },
};

/* export const metadata: Metadata = {
  title: "Construction App",
  description: "Construction Company",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedMobileNavigation />
        {/* <Navigation /> */}
        <NavigationLargeScreens />
        {children}
        <Footer />
      </body>
    </html>
  );
}
