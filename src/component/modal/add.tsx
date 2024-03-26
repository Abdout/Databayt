"use client";
import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import XlInupt from "../atom/input/xl";
import XlButton from "../atom/button/xl";
import { useState } from "react";
import { useRouter } from "next/navigation";

// const Add = (props: { onClose: () => void }) => {
//   const modalRef = useRef<HTMLDivElement | null>(null);
//   const closeModal = (e: React.MouseEvent) => {
//     if (modalRef.current === e.target) {
//       props.onClose();
//     }
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     const router = useRouter();

//     const handleSubmit = async (e: React.MouseEvent) => {
//       e.preventDefault();

//       if (!title || !description) {
//         alert("Title and description are required.");
//         return;
//       }

//       try {
//         const res = await fetch("http://localhost:3000/api/topics", {
//           method: "POST",
//           headers: {
//             "Content-type": "application/json",
//           },
//           body: JSON.stringify({ title, description }),
//         });

//         if (res.ok) {
//           router.push("/tool/flow/project");
//         } else {
//           throw new Error("Failed to create a topic");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   };
//   return (
//     <div
//       ref={modalRef}
//       onClick={closeModal}
//       className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
//     >
//       <div className="mt-10 flex flex-col gap-6">
//         <button onClick={props.onClose} className="place-self-end mr-2">
//           <Icon icon="material-symbols-light:close" width={28} />
//         </button>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//       <input
//         onChange={(e) => setTitle(e.target.value)}
//         value={title}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Topic Title"
//       />

//       <input
//         onChange={(e) => setDescription(e.target.value)}
//         value={description}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Topic Description"
//       />

//       <button
//         type="submit"
//         className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
//       >
//         Add Topic
//       </button>
//     </form>
//       </div>
//     </div>
//   );
// };

// export default Add;

import { useState } from 'react';

function Add() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!title || !description) {
                alert("Title and description are required.");
                return;
              }
        
              try {
                const res = await fetch("http://localhost:3000/api/topics", {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({ title, description }),
                });
        
                if (res.ok) {
                  router.push("/tool/flow/project");
                } else {
                  throw new Error("Failed to create a topic");
                }
              } catch (error) {
                console.log(error);
              }
            };
  };

  return (
    <div>
      <button onClick={openModal}>Add Topic</button>

      {isModalOpen && (
        <div className="modal">
          <button onClick={closeModal}>Close</button>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="border border-slate-500 px-8 py-2"
              type="text"
              placeholder="Topic Title"
            />

            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="border border-slate-500 px-8 py-2"
              type="text"
              placeholder="Topic Description"
            />

            <button
              type="submit"
              className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
            >
              Add Topic
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Add;
