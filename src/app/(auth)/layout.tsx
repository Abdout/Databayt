import { Rubik } from "next/font/google";
import "../globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rubik.className} dir="rtl">
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}
