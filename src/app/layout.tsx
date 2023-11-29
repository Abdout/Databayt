import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const rubik = localFont({
  src: "../font/rubik.ttf",
  variable: "--rubik",
});

const algalam = localFont({
  src: "../font/algalam.ttf",
  variable: "--algalam",
});

const alvi = localFont({
  src: "../font/alvi.ttf",
  variable: "--alvi",
});

const riwaj = localFont({
  src: "../font/riwaj.ttf",
  variable: "--riwaj",
});

const tajawal = localFont({
  src: "../font/tajawal.ttf",
  variable: "--tajawal",
});

export const metadata: Metadata = {
  title: "Databayt",
  description: "Business automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.variable, rubik.variable, algalam.variable, alvi.variable, riwaj.variable, tajawal.variable)}>
        
        {children}
        
      </body>
    </html>
  );
}
