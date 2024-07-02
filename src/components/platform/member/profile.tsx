'use client';
import React, { useEffect } from "react";
import { useMember } from "./context";
import Image from "next/image";
import { Icon } from '@iconify/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";

interface MemberProfileProps {
  id: string;
}

const MemberProfile: React.FC<MemberProfileProps> = ({ id }) => {
  const { member, fetchMember } = useMember();

  useEffect(() => {
    if (id) {
      fetchMember(id);
    }
  }, [id, fetchMember]);

  if (!member) {
    return <div>Loading...</div>;
  }

  const { phone, facebook, whatsapp } = member.contact || {};

  return (
    <div className='flex pt-6'>
      <div className='flex flex-col justify-center pl-8 border-l'>
        <Image
          src={member.image || '/hero/history.webp'}
          alt={member.name}
          width={180}
          height={180}
          className="object-cover object-center w-44 h-44 rounded-full"
        />
        <h2>{member.name}</h2>
        <div className="flex gap-4">
          <p className="text-xl font-light">{member.rank} <span>-</span> {member.address}</p>
        </div>
        <div className='flex items-center gap-5 pt-4 fill-current'>
          <Icon icon={"akar-icons:twitter-fill"} height="50" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
          <Icon icon={"akar-icons:github-fill"} height="45" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
          <Icon icon={"bi:facebook"} height="45" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
          <Icon icon={"cib:messenger"} height="45" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
        </div>
      </div>
      <div className='flex-grow px-8 pr-10 text-right'>
        <Tabs defaultValue="skill">
          <TabsList className='border-b'>
          <TabsTrigger value="exp">الخبرة</TabsTrigger>
          <TabsTrigger value="edu">التعليم</TabsTrigger>
          <TabsTrigger value="interest">الاهتمام</TabsTrigger>
            <TabsTrigger value="skill">المهارة</TabsTrigger>
           
           
            
          </TabsList>
          <TabsContent value="skill" className="px-44 py-20">
            <div>
              <h4>{member.skill}</h4>
              <p>  مهارات اخرى</p>
              
            </div>
          </TabsContent>
          <TabsContent value="interest" className="px-44 py-20">
            <div>
            <h4>{member.interest}</h4>
            <p>  اهتمامات اخرى</p>
            </div>
          </TabsContent>
          <TabsContent value="edu"  className="px-44 py-20">
            <div>
            <p> التعليم هنا</p>
            </div>
          </TabsContent>
          <TabsContent value="exp"  className="px-44 py-20">
            <div>
            <p> الخبرة هنا</p>
            </div>
          </TabsContent>
        </Tabs>
        
      </div>
      <Button variant="outline" className="fixed bottom-10 left-10 shadow-md reveal">
        <Icon icon="bitcoin-icons:message-outline" height="30" />
        <strong className="text-[16px]">رسالة</strong>

      </Button>
    </div>
  )
}

export default MemberProfile;
