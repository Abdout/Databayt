import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { Provider } from "@/component/live/provider";
import { MainProvider } from "@/component/reusable/logic/main";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const rubik = Rubik({ subsets: ["latin"], variable: "--rubik" });

export const metadata: Metadata = {
  title: "Databayt",
  description: "business automation",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth();

  return (
    <MainProvider>
      <SessionProvider session={session}>
    <Provider>
    <html lang="en">
      <body className={`${inter.variable} ${rubik.variable} overflow-x-hidden`}>
        <div className="w-full">
          {children}  
        </div>
      </body>
    </html>
    </Provider>
    </SessionProvider>
    </MainProvider>
  );
}
