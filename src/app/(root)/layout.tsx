import React from "react";
import "./root.css";
import { Inter, Rubik } from "next/font/google";
import Footer from "@/component/layout/footer";
import { home } from "@/constant/header";
import Nav from "@/component/home/nav";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const rubik = Rubik({ subsets: ["latin"], variable: "--inter" });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rubik.variable} overflow-x-hidden`}>
        <div className="w-full">
          <Nav links = {home} />
          {children}  
          <Footer />
        </div>
      </body>
    </html>
  );
}
