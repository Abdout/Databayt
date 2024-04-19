import React from "react";
import "../globals.css";
import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const rubik = Rubik({ subsets: ["latin"], variable: "--inter" });

export const metadata: Metadata = {
  title: "Databayt",
  description: "business automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rubik.variable} overflow-x-hidden`}>
        <div className="w-full">
          <Header />
          {children}  
          <Footer />
        </div>
      </body>
    </html>
  );
}
