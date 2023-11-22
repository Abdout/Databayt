import React from "react";
import MicroIcon from "../../../Atom/Icon/Micro";
import CentiText from "../../../Atom/Text/Centi";
import NanoIcon from "../../../Atom/Icon/Nano";
import DeleteProject from "@/components/Tool/Flow/Project/DeleteProject";

const getTopics = async () => {
  try {
    const res = await fetch("http://databayt.com/api/topics", {
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

const ProjectList = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div key={t._id} className="flex flex-col items-start border p-4 space-y-2">
          <div className="flex items-center gap-4 ">
            <MicroIcon src="/github.png" alt="m" path="" />
            <div className="flex flex-col">
              <h1>{t.title}</h1>
              <p>{t.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-2 pt-4">
            <div className="rounded-full w-4 h-4 bg-green-500"></div>
            <CentiText text="On going" />
          </div>
          <div className="flex gap-2 pl-40">
            <button>
              <NanoIcon
                src="/edit.png"
                alt=""
                path={`/tool/flow/project/edit/${t._id}`}
              />
            </button>
            <DeleteProject id={t._id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectList;
