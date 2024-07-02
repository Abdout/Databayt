"use client";
import { task, TaskContextProps } from './type';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [task, setTask] = useState<task | null>(null);
  const [tasks, setTasks] = useState<task[]>([]);

  const createTask = async (data: task) => {
    try {
      const response = await fetch(`/api/task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.error(`Error creating task: ${response.status} ${response.statusText}`);
        return;
      }
      await fetchTasks();
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  const fetchTask = useCallback(async (id: string) => {
    console.log(`Fetching task with id: ${id}`);
    const response = await fetch(`/api/task/${id}`);
    console.log('Received response:', response);
  
    if (!response.ok) {
      console.log('Failed to fetch task:', response.statusText);
      return;
    }
  
    const data = await response.json();
    console.log('Parsed response data:', data);
  
    if (!data || typeof data !== 'object' || !data.task || typeof data.task !== 'object' || !data.task._id) {
      console.log('Unexpected data format:', data);
      return;
    }
  
    setTask(data.task);
    console.log('Updated task state:', task);
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`/api/task`);
      const data = await res.json();
      setTasks(data.tasks);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const res = await fetch(`/api/task?id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        console.error(`Error deleting task: ${res.status} ${res.statusText}`);
        return;
      }
      await fetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const refreshTasks = async () => {
    await fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateTask = async (id: string, data: Partial<task>) => {
    try {
      const response = await fetch(`/api/task/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.error(`Error updating task: ${response.status} ${response.statusText}`);
        return;
      }
      await fetchTasks();
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ task, tasks, fetchTask, fetchTasks, refreshTasks, deleteTask, updateTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};