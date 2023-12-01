import React from "react";
import Link from "next/link";
import XlInupt from "@/components/atom/input/xl";
import XlButton from "@/components/atom/button/xl";



const Join = () => {
  return (
    <div className="mt-60 px-6 space-y-3">
      <XlInupt placeholder="Name" />
      <XlInupt placeholder="Phone" />
      <XlInupt placeholder="Password" />
      <p>Between 7 to 28 characters</p>
      <XlButton placeholder="Join" />
      <XlButton placeholder="Join" />
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
