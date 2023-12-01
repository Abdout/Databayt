"use client";
import React, { useState } from "react";

const ReadMore = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex flex-col text-right items-end gap-2">
      <h1 className="font-medium text-[18px]"> Databayt داتابيت</h1>
      <p className="font-medium text-[17px] mb-2">
        مشروع تقني حول أتمتة الأعمال
      </p>
      <div
        className={`relative overflow-hidden ${
          expand
            ? ""
            : 'after:content-[""] after:absolute after:bottom-0 after:right-0 after:w-full after:h-10 after:bg-gradient-to-b after:from-transparent after:to-[#fcfcfc]'
        }`}
      >
        <h4 className={`${expand ? "" : "max-h-20 overflow-hidden"}`}>
          {
            "داتابيت معنية بتقديم أدوات تساعد على أتمتة الأعمال, وتسعى داتابيت لتكون جسرا يوصل بالأدوات المتاحة بالفعل في السوق العالمي, المجانية منها والمدفوعة الثمن, وتسعى كذلك لبناء أدوات من الصفر. دعوى المشروع جاية من الإيمان باللامركزية والمصدر والمفتوح وبالاقتصاد التشاركي وريادة الأعمال المجتمعية والإيمان بالدور المهم للتقنية في أتصال الناس وتفاعله مع بعضها البعض, ومجتمع التقنين هم أنفسهم من أكثر المجتمعات الملهمة للعمل الجماعي والتعاون, وهم كذلك الأكثر اتصالا وبالتالي الأسرع تطورا"
          }
        </h4>
      </div>
      <div className="flex gap-2">
        <button
          className="text-blue-800 mt-2"
          onClick={() => setExpand(!expand)}
        >
          {expand ? " أقرا اقل" : "أقرا المزيد"}
        </button>
      </div>
    </div>
  );
};

export default ReadMore;
