import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/app/view/nav/Navbar";
import React from "react";
import Footer from "./view/footer/footer";

export const metadata: Metadata = {
  title: "Vendy MarketPlace",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
