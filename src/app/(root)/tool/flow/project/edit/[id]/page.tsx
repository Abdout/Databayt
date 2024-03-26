"use client";
import Edit from "@/component/modal/edit";
import { useState } from "react";

const getTopicById = async (props:{id:any}) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${props.id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic(props:{ params:any }) {
  const [show, setShow] = useState(false);
  
  const { id } = props.params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return show && <Edit onClose={() => setShow(false)} id={id} title={title} description={description} topic={topic}/>;
}
