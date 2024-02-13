'use client';
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Head from "./head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
