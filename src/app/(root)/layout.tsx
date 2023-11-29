import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={"{inter.className} "}>
        <Header />
        {children}
      </body>
    </html>
  );
}
