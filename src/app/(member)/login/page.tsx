import CentiButton from "@/components/Atom/Button/Centi";
import CentiInupt from "@/components/Atom/Input/Centi";
import MicroText from "@/components/Atom/Text/Micro";
import React from "react";

const Login = () => {
  return (
    <div className="mt-60 px-6 space-y-3">
      
      <CentiInupt placeholder="Phone" />
      <CentiInupt placeholder="Password" />
      <MicroText
        span="Forget your password?"
        link="/member/reset" />
      <CentiButton placeholder="Log in" />
      
    </div>
  )
}

export default Login