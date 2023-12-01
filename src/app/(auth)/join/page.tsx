import React from "react";
import Link from "next/link";
import xlInupt from "@/components/atom/input/xl";


const Join = () => {
  return (
    <div className="mt-60 px-6 space-y-3">
      <xlInupt placeholder="Name" />
      <xlInupt placeholder="Phone" />
      <xlInupt placeholder="Password" />
      <p>Between 7 to 28 characters</p>
      <xlButton placeholder="Join" />
      <xlButton placeholder="Join" />
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
