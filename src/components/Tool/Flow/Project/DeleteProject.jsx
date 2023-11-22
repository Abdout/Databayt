"use client";

import { useRouter } from "next/navigation";
import NanoIcon from "../../../Atom/Icon/Nano";
export default function DeleteProject({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <NanoIcon src="/delete.png" alt="" path="" />
    </button>
  );
}
