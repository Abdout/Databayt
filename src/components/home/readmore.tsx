"use client";
import React, { useState } from "react";
import Back from "../atom/icon/back";
import Down from "../atom/icon/down";

const ReadMore = () => {
  const [expand, setExpand] = useState(true);

  return (
    <div className="flex flex-col text-right items-end gap-2">
      <h1 className="font-medium text-[18px]"> Databayt داتابيت</h1>
      <p className="font-medium text-[17px]">مشروع تقني حول أتمتة الأعمال</p>
      <div
        className="short-text"
        style={{
          opacity: expand ? 1 : 0.3,
          transition: "opacity 0.5s ease",
        }}
      >
        {expand
          ? "داتابيت معنية بتقديم أدوات تساعد على أتمتة الأعمال، وتسعى داتابيت لتكون جسرا يوصل بالأدوات المتاحة  بالفعل في السوق العالمي، المجانية منها والمدفوعة الثمن، وتسعى كذلك لبناء أدوات من الصفر."
          : " داتابيت معنية بتقديم أدوات تساعد على أتمتة الأعمال, وتسعى داتابيت لتكون جسرا يوصل بالأدوات المتاحة بالفعل في السوق العالمي, المجانية منها والمدفوعة الثمن, وتسعى كذلك لبناء أدوات من الصفر. دعوى المشروع جاية من الإيمان باللامركزية والمصدر والمفتوح وبالاقتصاد التشاركي وريادة الأعمال المجتمعية والإيمان بالدور المهم للتقنية في أتصال الناس وتفاعله مع بعضها البعض, ومجتمع التقنين هم أنفسهم من أكثر المجتمعات الملهمة للعمل الجماعي والتعاون, وهم كذلك الأكثر اتصالا وبالتالي الأسرع تطورا"}
      </div>
      <div className="flex gap-2">
        <Down />
        <button
          className="text-blue-800"
          onClick={() => setExpand(!expand)}
        >
          {expand ? "أقرا المزيد" : "أقرا أقل"}
        </button>
      </div>
    </div>
  );
};

export default ReadMore;

