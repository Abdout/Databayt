import { useState, useEffect } from 'react';
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Delete from "./delete";
import SmIcon from '@/component/atom/icon/sm';
import Edit from '@/component/modal/edit';
import MdIcon from '@/component/atom/icon/md';

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default function TopicsList() {
  const [show, setShow] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [topics, setTopics] = useState([]);
  const updateTopic = (updatedTopic) => {
    setTopics(topics.map(topic => topic._id === updatedTopic._id ? updatedTopic : topic));
  };

  useEffect(() => {
    getTopics().then(data => setTopics(data.topics));
  }, []);

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border my-3 flex flex-col justify-between gap-5 items-start"
        >
          <div>
            <h1>{t.title}</h1>
            <div>{t.description}</div>
          </div>

          <SmIcon src='/profile.png' alt='Profile' path=''/>

          <div className="flex gap-2 items-center">
            <div className='bg-green-500 w-3 h-3 rounded-full'></div>
            <h3>On going</h3>
          </div>

          <div className="flex gap-2">
            <Delete id={t._id} />
            <button
            onClick={() =>{setShow(true); setCurrentTopic(t._id);}}>
              <SmIcon src='/edit.png' alt='Edit' path=''/>
            </button>
            {show && <Edit onClose={() => setShow(false)} topic={currentTopic} onUpdate={updateTopic}/>}
            {/* <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link> */}
          </div>
        </div>
      ))}
    </>
  );
}
