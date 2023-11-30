import Header from "@/components/layout/header";
import type { Metadata } from "next";
import localFont from "next/dist/compiled/@next/font/dist/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const rubik = localFont({
  src: "../font/rubik.ttf",
  variable: "--rubik",
});
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
        <Header />
        {children}
      </body>
    </html>
  );
}
