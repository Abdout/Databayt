import React from "react";
import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import Header from "@/component/tool/flow/header";
import Side from "@/component/atom/bar/side";



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
      <body className={"(inter.variable, rubik.variable)"}>
        <div className="md:-m-[24px] flex flex-col md:flex-row">
          <div className="hidden md:flex sticky md:w-1/5">
            <Side />
          </div>
          <div className="flex flex-col md:w-4/5">
            <Header />
            <div className="flex-grow">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
