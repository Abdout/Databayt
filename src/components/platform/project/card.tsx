// ProjectCard.tsx
import React from 'react';
import { Icon } from '@iconify/react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface Project {
    
    title: string;
    desc: string;
    lead: string;
    status: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card className='border hover:border-black w-60 h-60 reveal'>
            <CardHeader>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2 items-center my-1">
                    <Icon icon="material-symbols-light:bookmark-sharp" width={25} />
                    <p>{project.lead}</p>
                </div>
            </CardContent>
            <CardFooter className="flex gap-4 items-center mr-[3.5px] -mt-6">
                <div className="bg-yellow-400 rounded-full w-[18px] h-[18px]" />
                <p>{project.status}</p>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;
