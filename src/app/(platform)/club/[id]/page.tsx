'use client';
import { usePathname } from 'next/navigation';
import { club } from '@/components/platform/club/constant';
import Title from '@/components/atom/title';
import React from 'react';
import { Icon } from "@iconify/react";

const ClubPage = () => {
    const pathname = usePathname();
    const id = pathname.split("/").pop();

    // Find the club with the matching id
    const currentClub = club.find((c) => c.id === id);

    // If no club is found, return null or some error message
    if (!currentClub) {
        return null; // or return <div>Club not found</div>
    }

    return (
        <div className='mt-20'>
            <div className='flex gap-2 items-center'>
                <Icon icon={currentClub.icon} width={40} />
                <h2>المجتمع</h2>
            </div>
            <p className='font-light text-lg pb-4'>ويبقي الامل في العامة, عامة الناس</p>
            <p>للتفاعل مع امانة المجتمع استكشف الروابط ادناه 👇<br/> تجد الدليل والخطة والمشاريع والمهام والمحادثة والمساهمة على التوالي </p>
            <div className='flex gap-8 items-center pt-10'>
                <Icon icon="ph:book-fill" width={70} className='reveal-less' />
                <Icon icon="ion:trail-sign" width={70} className='reveal-less' />
                <Icon icon="ic:baseline-folder" width={70} className='reveal-less' />
                <Icon icon="fluent:task-list-square-24-filled" width={70} className='reveal-less' />
                <Icon icon="bitcoin-icons:message-filled" width={100} className='reveal-less' />
                <Icon icon="teenyicons:git-commit-solid" width={70} className='reveal-less' />
            </div>
        </div>
    );
};

export default ClubPage;