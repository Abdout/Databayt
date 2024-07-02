export interface Project {
  _id?: string;
  title: string;
  desc: string;
  lead: string;
  status: string;
  readme: string;
  roadmap: string;
  task: string;
  contributor: string;
  material: string;
  chat: string;
  updatedAt: string;
}

export interface ProjectContextProps {
  project: Project | null;
  projects: Project[];
  fetchProject: (id: string) => void;
  fetchProjects: () => void;
  refreshProjects: () => void;
  deleteProject: (id: string) => void;
}