import React from "react";
import XlInupt from "@/components/atom/input/xl";
import XlButton from "@/components/atom/button/xl";

const Reset = () => {
  return (
    <div className="mt-40 px-6 space-y-3">
      <h1>Forget password?</h1>
      <p>Reset password in two quick steps</p>
      <XlInupt placeholder="Phone" />
      <XlButton placeholder="Reset password" weight={16} />
    </div>
  );
};

export default Reset;
