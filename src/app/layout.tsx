import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/modal/context";
import { UploadProvider } from "@/components/upload/context";
import { ThemeProvider } from "@/components/theme/provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "الحركة الوطنية",
  description: "الحركة الوطنية للبناء والتنمية - المجتمع اولا",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={rubik.className} dir="rtl">
          <div className="container">
            <div className="wrapper">
              <ModalProvider>
                <UploadProvider>
                  <ThemeProvider>
                    {children}
                  </ThemeProvider>
                </UploadProvider>
              </ModalProvider>
            </div>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
