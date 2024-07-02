"use client";
import { Rubik } from "next/font/google";
import "../globals.css";
import Header from "@/components/platform/header/ui";
import { MemberProvider } from "@/components/platform/member/context";
import { UploadProvider } from "@/components/upload/context";
import { ProjectProvider } from "@/components/platform/project/context";
import { TaskProvider } from "@/components/platform/task/context";

const rubik = Rubik({ subsets: ["latin"] });

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rubik.className} dir="rtl">
        <div className="container">
          <div className="wrapper">
            <ProjectProvider>
              <UploadProvider>
                <MemberProvider>
                  <TaskProvider>
                    <Header />
                    {children}
                  </TaskProvider>
                </MemberProvider>
              </UploadProvider>
            </ProjectProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
