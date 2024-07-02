import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button"; // Adjust the import path to where your Button component is located

const Action = () => {
  return (
    <>
      <div className="flex gap-8 items-center">
      </div>
      <div className="flex gap-6 border-b border-gray-400 py-2 pb-4 w-[50rem]">
        <Button variant="outline" className="flex w-32 gap-1 px-3 py-2">
          <Icon icon={"system-uicons:check"} height="24" />
          <h4>اعتماد</h4>
        </Button>
        <Button variant="outline" className="flex w-32 justify-center items-center gap-2 px-3 py-2">
          <Icon icon={"fluent:edit-48-regular"} height="16" />
          <h4>تعديل</h4>
        </Button>
        <Button variant="outline" className="flex w-32 justify-center items-center gap-2 px-3 py-2">
          <Icon icon={"bi:send"} height="16" />
          <h4>ارسال</h4>
        </Button>
        <Button variant="outline" className="flex w-32 justify-center items-center gap-2 px-3 py-2">
          <Icon icon={"clarity:download-line"} height="18" />
          <h4>تنزيل</h4>
        </Button>
      </div>
    </>
  );
};

export default Action;