import CentiButton from "@/components/atom/button/centi";
import CentiInupt from "@/components/atom/input/centi";
import Link from "next/link";
import React from "react";

const Join = () => {
  return (
    <div className="mt-60 px-6 space-y-3">
      <CentiInupt placeholder="Name" />
      <CentiInupt placeholder="Phone" />
      <CentiInupt placeholder="Password" />
      <p>Between 7 to 28 characters</p>
      <CentiButton placeholder="Join" />
      <p>
        Already on Databayt?
        <span>
          <Link href="/member/login">
            Log in
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Join;
