"use client";


import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Project, ProjectContextProps } from './type';

const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProject = useCallback(async (id: string) => {
    console.log(`Fetching project with id: ${id}`);
    const response = await fetch(`/api/project/${id}`);
    console.log('Received response:', response);
  
    if (!response.ok) {
      console.log('Failed to fetch project:', response.statusText);
      return;
    }
  
    const data = await response.json();
    console.log('Parsed response data:', data);
  
    if (!data || typeof data !== 'object' || !data.project || typeof data.project !== 'object' || !data.project._id) {
      console.log('Unexpected data format:', data);
      return;
    }
  
    setProject(data.project);
    console.log('Updated project state:', project);
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`/api/project`);
      const data = await res.json();
      setProjects(data.projects);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const res = await fetch(`/api/project?id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        console.error(`Error deleting project: ${res.status} ${res.statusText}`);
        return;
      }
      await fetchProjects();
    } catch (error) {
      console.error('Failed to delete project:', error);
    }
  };

  const refreshProjects = async () => {
    await fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ project, projects, fetchProject, fetchProjects, refreshProjects, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};