import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
};

export const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <p className="text-muted-foreground font-light">
        {label}
      </p>
      <h2 >
        الحركة الوطنية
      </h2> */}
      
    </div>
  );
};
