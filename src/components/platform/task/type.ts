export type task = {
  _id: string;
  project: string,
  title: string;
  club: string;
  skill: string[];
  team: string[];
  status: string;
  priority: string;
  duration: number;
  remark: string;
}

export interface TaskContextProps {
  task: task | null;
  tasks: task[];
  fetchTask: (id: string) => void;
  fetchTasks: () => void;
  refreshTasks: () => void;
  deleteTask: (id: string) => void;
  createTask: (data: task) => void; // Assuming you need a method to create a task
  updateTask: (id: string, data: Partial<task>) => void; // Assuming you need a method to update a task
}