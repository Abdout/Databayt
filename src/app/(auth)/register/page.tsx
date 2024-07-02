'use client';
import React from 'react';
import { MemberProvider } from '@/components/platform/member/context';
import { UploadProvider } from '@/components/upload/context';
import Create from '@/components/platform/member/art';
import { ArticleProvider } from '@/components/root/article/context';

const Register = () => {

  return (
    <ArticleProvider>
      <UploadProvider>
        <MemberProvider>
          <div>
            <Create />
          </div>
        </MemberProvider>
      </UploadProvider>
    </ArticleProvider>
  );
};

export default Register;
