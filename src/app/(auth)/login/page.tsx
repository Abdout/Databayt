import React from "react";
import Link from "next/link";
import CentiInupt from "@/components/atom/input/centi";
import CentiButton from "@/components/atom/button/centi";

const Login = () => {
  return (
    <div className="mt-[20rem] px-6 space-y-3">
      <CentiInupt placeholder="Phone" />
      <CentiInupt placeholder="Password" />
      <Link href="/member/reset">
        <p>Forget your password?</p>
      </Link>
      <CentiButton placeholder="Log in" />
    </div>
  );
};

export default Login;
