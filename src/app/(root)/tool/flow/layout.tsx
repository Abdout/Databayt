import DashHeader from "@/components/tool/flow/DashHeader";
import DashSide from "@/components/tool/flow/DashSide";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Docs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"{inter.className} "}>
        <div className="flex">
          <DashSide />
          <div>
            <div className="flex items-center justify-between">
              <DashHeader />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
