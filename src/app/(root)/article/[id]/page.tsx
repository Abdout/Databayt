'use client';
import React from 'react';
import { usePathname } from "next/navigation";
import ArticleById from '@/components/root/article/id';

const ArticlePage: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  return (
    <div>
      <ArticleById id={id as string} />
    </div>
  );
};

export default ArticlePage;