"use client";

import { Article, ArticleContextProps } from './type';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ArticleContext = createContext<ArticleContextProps | undefined>(undefined);

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticle must be used within a ArticleProvider');
  }
  return context;
};

export const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticle = useCallback(async (id: string) => {
    console.log(`Fetching article with id: ${id}`);
    const response = await fetch(`/api/article/${id}`);
    console.log('Received response:', response);
  
    // Check if the request was successful
    if (!response.ok) {
      console.log('Failed to fetch article:', response.statusText);
      return;
    }
  
    // Parse the response data
    const data = await response.json();
    console.log('Parsed response data:', data);
  
    // Check if the data has the expected format
    if (!data || typeof data !== 'object' || !data.article || typeof data.article !== 'object' || !data.article._id) {
      console.log('Unexpected data format:', data);
      return;
    }
  
    // Update the article state
    setArticle(data.article);
    console.log('Updated article state:', article);
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch(`/api/article`);
      const data = await res.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Failed to fetch articles:', error);
    }
  };

  const recentArticles = async () => {
    try {
      const res = await fetch(`/api/article?limit=4`);
      const data = await res.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Failed to fetch recent articles:', error);
    }
  };

  const deleteArticle = async (id: string) => {
    try {
      const res = await fetch(`/api/article?id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        console.error(`Error deleting article: ${res.status} ${res.statusText}`);
        return;
      }
      // Refresh the articles after one is deleted
      await fetchArticles();
    } catch (error) {
      console.error('Failed to delete article:', error);
    }
  };

  const refreshArticles = async () => {
    await fetchArticles();
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ArticleContext.Provider value={{ article, articles, fetchArticle, fetchArticles, refreshArticles, recentArticles, deleteArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};