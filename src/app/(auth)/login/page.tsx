import React from "react";
import Link from "next/link";
import XlInupt from "@/components/atom/input/xl";
import XlButton from "@/components/atom/button/xl";


const Login = () => {
  return (
    <div className="mt-[20rem] px-6 space-y-3">
      <XlInupt placeholder="Phone" />
      <XlInupt placeholder="Password" />
      <Link href="/member/reset">
        <p>Forget your password?</p>
      </Link>
      <XlButton placeholder="Log in" />
    </div>
  );
};

export default Login;
