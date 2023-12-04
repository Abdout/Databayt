"use client";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react'

const item = [
  { title: 'Project', path: '/tool/flow/project', icon: 'mdi-project' },
  { title: 'Task', path: '/tool/flow/task', icon: 'mdi-task' },
  { title: 'Report', path: '/tool/flow/report', icon: 'mdi-report' },
  { title: 'Account', path: '/account', icon: 'mdi-account' },
  // add more items as needed...
];

const Side = () => {
  return (
    <div className='sticky h-screen w-60 bg-gray-100'>
    {item.map((item, index) => (
      <Link key={index} href={item.path}>
        <div className="flex flex-row space-x-2 items-center p-2 hover:bg-gray-300">
          <Icon icon={item.icon} />
          <span className="font-medium text-xl flex">{item.title}</span>
        </div>
      </Link>
    ))}
  </div>
  )
}

export default Side