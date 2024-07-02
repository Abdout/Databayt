'use client';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useProject } from "./context";
import { Icon } from '@iconify/react';


import ProjectCard from './card';
import { ProjectDialog } from "./dailog";

const ProjectContent: React.FC = () => {
    const { refreshProjects, projects, deleteProject } = useProject();
    const [contextMenu, setContextMenu] = useState<{ x: number, y: number, projectID: string | null }>({ x: 0, y: 0, projectID: null });

    useEffect(() => {
        refreshProjects();
        console.log(projects); // Add this line
    }, []);

    const handleRightClick = (e: React.MouseEvent, projectID: string) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY, projectID });
    };

    const handleCloseContextMenu = () => {
        setContextMenu({ x: 0, y: 0, projectID: null });
    };


    return (
        <div className="pt-10">
            {/* <p className="text-lg tracking-wide font-light w-screen justify-center items-center  flex " dir="ltr">
                The most magical part of the Harry Potter books, is that they eventually
                used the skills they learned at school
            </p> */}
            <div className='grid grid-cols-3 gap-x-80 gap-y-14'>
                {projects.map((project) => {
                    const updatedAt = new Date(project.updatedAt);
                    const formattedDate = `${updatedAt.getDate()}/${updatedAt.getMonth() + 1}/${updatedAt.getFullYear()}`;
                    return (
                        <div key={project._id}
                            onContextMenu={(e) => {
                                if (project._id) {
                                    handleRightClick(e, project._id);
                                }
                            }}
                        >
                            {/* <Link href={`/project/${project._id}`}> */}
                                <div className={`relative flex items-center justify-center w-60 ${contextMenu.projectID === project._id ? 'opacity-80' : ''}`}>
                                    <ProjectCard project={project} />
                                    {contextMenu.projectID === project._id && (
                                        <div
                                            className="absolute top-0 left-0 w-full h-full flex gap-4 justify-center items-center bg-transparent"
                                            onMouseLeave={handleCloseContextMenu}
                                        >
                                            <button onClick={() => project._id && deleteProject(project._id)}><Icon icon="ant-design:delete-filled" width={40} /></button>
                                            <button
                                                className="flex gap-4"
                                            >
                                                <Icon icon="icon-park-solid:edit" width={40} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            {/* </Link> */}

                        </div>
                    );
                })}
                <ProjectDialog />
            </div>

        </div>
    );
};

export default ProjectContent;