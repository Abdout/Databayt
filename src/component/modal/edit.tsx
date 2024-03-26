"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const Edit = (props: {
  id: any;
  title: string;
  description: string;
  onClose: () => void;
  topic: any;
  onUpdate: (updatedTopic: any) => void;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      props.onClose();
    }
  };
  const { id, title, description } = props.topic;

  const [newTitle, setNewTitle] = useState(props.topic.title);
  const [newDescription, setNewDescription] = useState(props.topic.description);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${props.topic._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ itle: newTitle, description: newDescription }),
      });

      if (res.ok) {
        const updatedTopic = await res.json();
        props.onUpdate(updatedTopic);
        props.onClose();
      }

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/tool/flow/project");
      props.onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center"
    >
      <div className=" flex flex-col  bg-[#fcfcfc] p-6">
        <button onClick={props.onClose} className="place-self-end ">
          <Icon icon="material-symbols-light:close" width={28} />
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col p-20 gap-3">
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Title"
          />

          <input
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Description"
          />

          <button
            type="submit"
            className="bg-yellow-400 font-medium mt-4 py-3 px-6 h-12"
          >
            Update Topic
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
