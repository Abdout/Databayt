'use client';
import React from 'react';
import { DataTable } from '@/components/table/data-table';
import { columns } from '@/components/table/coloum';
import { useMember } from '@/components/platform/member/context';




const Member = () => {
    
    const { members } = useMember();

    return (
        <div>
            <DataTable columns={columns} data={members} />
            
        </div>
            
    );
};

export default Member;