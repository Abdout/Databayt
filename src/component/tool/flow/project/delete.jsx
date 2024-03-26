"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import SmIcon from "@/component/atom/icon/sm";

const Delete = ({id}) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button
    onClick={removeTopic} >
      <SmIcon src="/delete.png" alt="Delete" path=""/>
    </button>
  );
};

export default Delete;
