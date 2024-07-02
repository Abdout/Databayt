'use client';
import React from 'react';
import { usePathname } from "next/navigation";
import MemberProfile from '@/components/platform/member/profile';

const Profile: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  return (
    <div>
      <MemberProfile id={id as string} />
    </div>
  );
};

export default Profile;