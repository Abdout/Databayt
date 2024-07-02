'use client';
import React from 'react';
import { DataTable } from '@/components/table/data-table';
import { columns } from '@/components/platform/task/column';
import { TaskProvider, useTask } from '@/components/platform/task/context'; 
import { TaskDialog } from '@/components/platform/task/dailog';

const Task = () => {
  const { tasks } = useTask();

  return (
    <div>
      <div className='fixed bottom-10 right-10'>
        <TaskDialog />
      </div>
      <DataTable columns={columns} data={tasks} />
    </div>
  );
};

export default Task;