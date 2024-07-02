// components/Countdown.tsx
'use client';
import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown p-4 ">
      {timeLeft ? (
        <div className="flex gap-4 text-xl">
          <div className="flex flex-col gap-[2px] items-center  ">
            <span className=" bg-black text-[#fcfcfc] pt-[6px] rounded-sm shadow-md w-10 h-10 text-center">{timeLeft.days}</span>
            <span className="text-sm ">يوم</span>
          </div>
          <div className="flex flex-col gap-[2px] items-center ">
            <span className=" bg-black text-[#fcfcfc] pt-[6px] rounded-sm shadow-md w-10 h-10 text-center">{timeLeft.hours}</span>
            <span className="text-sm">ساعة</span>
          </div>
          <div className="flex flex-col gap-[2px] items-center ">
            <span className=" bg-black text-[#fcfcfc] pt-[6px] rounded-sm shadow-md w-10 h-10 text-center">{timeLeft.minutes}</span>
            <span className="text-sm">دقيقة</span>
          </div>
          <div className="flex flex-col gap-[2px] items-center ">
            <span className=" bg-black text-[#fcfcfc] pt-[6px] rounded-sm shadow-md w-10 h-10 text-center">{timeLeft.seconds}</span>
            <span className="text-sm">ثانية</span>
          </div>
        </div>
      ) : (
        <span>Event started</span>
      )}
    </div>
  );
};

export default Countdown;
