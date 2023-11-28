import CentiButton from "@/components/Atom/Button/Centi";
import CentiInupt from "@/components/Atom/Input/Centi";
import CentiText from "@/components/Atom/Text/Centi";
import MicroText from "@/components/Atom/Text/Micro";
import React from "react";

const Reset = () => {
  return (
    <div className="mt-60 px-6 space-y-3">
      <CentiText text="Forget password?" />
      <MicroText text="Reset password in two quick steps" />
      <CentiInupt placeholder="Phone" />
      <CentiButton placeholder="Reset password" weight={16} />
    </div>
  );
};

export default Reset;
