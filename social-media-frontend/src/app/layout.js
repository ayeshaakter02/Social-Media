import { Poppins , Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Socinex",
  description: "A fast and modern social media platform built with Next.js where users can share posts, interact with others, and explore new content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
