import React, { useEffect } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useTask } from '@/components/platform/task/context'; // Assuming you have a useTask hook
import { task } from '@/components/platform/task/type'; // Assuming you have a task type

const ActionCell = ({ row }: { row: any }) => {
  const task = row.original;
  const { deleteTask } = useTask(); // Assuming you have deleteTask in useTask

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>الضبط</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(task._id)}
        >
          نسخ 
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/task/${task._id}`}>
            ملف
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => task._id && deleteTask(task._id)}>حذف</DropdownMenuItem> 
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<task>[] = [
  {
    accessorKey: 'project',
    header: ({ column }) => {
      return (
        <div className="text-right">
        <Button
        className='p-0 m-0'
        
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          المشروع
          {/* <ArrowUpDown className=' h-4 w-4' /> */}
        </Button>
        </div>
      )
    }
  },
  {
    accessorKey: 'title',
    header: () => <div className="text-right">المهمة</div>,
  },
  {
    accessorKey: 'club',
    header: 'الامانة',
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-right">الحالة</div>,
  },
  {
    accessorKey: 'priority',
    header: () => <div className="text-right">الاولوية</div>,
  },
  {
    accessorKey: 'duration',
    header: () => <div className="text-right">المدة </div>,
  },
  {
    id: 'actions',
    cell: (props) => <ActionCell {...props} />
  },
];