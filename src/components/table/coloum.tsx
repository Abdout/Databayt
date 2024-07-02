'use client'

import React, { useEffect } from 'react'; // Import React and useEffect
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/react';
import { member } from '../platform/member/type'
import Link from 'next/link'
import { useMember } from '../platform/member/context'

const ActionsCell: React.FC<{ row: any }> = ({ row }) => {
  const { refreshMembers, members, deleteMember } = useMember();
  
  useEffect(() => {
    refreshMembers();
    console.log(members);
  }, []);

  const user = row.original;

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
          onClick={() => navigator.clipboard.writeText(user._id)}
        >
          نسخ 
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/member/${user._id}`}>
            ملف
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>تجميد</DropdownMenuItem>
        <DropdownMenuItem onClick={() => user._id && deleteMember(user._id)}>حذف</DropdownMenuItem> 
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<member>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            className='p-0 m-0'
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            الاسم
            <ArrowUpDown className=' h-4 w-4' />
          </Button>
        </div>
      )
    }
  },
  {
    accessorKey: 'address',
    header: () => <div className="text-right">العنوان</div>,
  },
  {
    accessorKey: 'gender',
    header: () => <div className="text-right">النوع</div>,
  },
  {
    accessorKey: 'rank',
    header: 'التخصص'    
  },
  {
    accessorKey: 'skill',
    header: () => <div className="text-right">المهارة</div>,    
  },
  {
    accessorKey: 'interest',
    header: () => <div className="text-right">الاهتمام</div>,    
  },
  {
    accessorKey: 'dob',
    header: () => <div className="text-right">العمر</div>,    
  },
  {
    accessorKey: 'contact',
    header: () => <div className="text-right">الاتصال</div>,
    cell: ({ row }) => {
      const { phone, facebook, whatsapp } = row.original.contact || {};

      return (
        <div className='flex gap-4'>
          {phone && <a href={phone}>
            <Icon icon='ph:phone-call-thin' width={24} className='reveal'/>
            </a>}
          {whatsapp && <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
          <Icon icon='circum:mail' width={25} className='reveal' />
          </a>}
        </div>
      )
    },
  },
  
  {
    id: 'actions',
    cell: ActionsCell // Use the new React component or custom hook function here
  }
]
