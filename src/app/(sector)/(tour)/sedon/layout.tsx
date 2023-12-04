import React from "react";
import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";

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
      <body className={(inter.variable, rubik.variable)}>
        
        {children}
        
      </body>
    </html>
  );
}
