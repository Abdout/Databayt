"use client";

import {  MemberContextProps, member } from './type';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const MemberContext = createContext<MemberContextProps | undefined>(undefined);

export const useMember = () => {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error('useMember must be used within a MemberProvider');
  }
  return context;
};

export const MemberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [member, setMember] = useState<member | null>(null);
  const [members, setMembers] = useState<member[]>([]);

  const createMember = async (data: member) => {
    try {
      const response = await fetch(`/api/member`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.error(`Error creating member: ${response.status} ${response.statusText}`);
        return;
      }
      await fetchMembers();
    } catch (error) {
      console.error('Failed to create member:', error);
    }
  };

  const fetchMember = useCallback(async (id: string) => {
    console.log(`Fetching member with id: ${id}`);
    const response = await fetch(`/api/member/${id}`);
    console.log('Received response:', response);
  
    if (!response.ok) {
      console.log('Failed to fetch member:', response.statusText);
      return;
    }
  
    const data = await response.json();
    console.log('Parsed response data:', data);
  
    if (!data || typeof data !== 'object' || !data.member || typeof data.member !== 'object' || !data.member._id) {
      console.log('Unexpected data format:', data);
      return;
    }
  
    setMember(data.member);
    console.log('Updated member state:', member);
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await fetch(`/api/member`);
      const data = await res.json();
      setMembers(data.members);
    } catch (error) {
      console.error('Failed to fetch members:', error);
    }
  };

  const deleteMember = async (id: string) => {
    try {
      const res = await fetch(`/api/member?id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        console.error(`Error deleting member: ${res.status} ${res.statusText}`);
        return;
      }
      await fetchMembers();
    } catch (error) {
      console.error('Failed to delete member:', error);
    }
  };

  const refreshMembers = async () => {
    await fetchMembers();
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const updateMember = async (id: string, data: Partial<member>) => {
    try {
      const response = await fetch(`/api/member/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.error(`Error updating member: ${response.status} ${response.statusText}`);
        return;
      }
      await fetchMembers();
    } catch (error) {
      console.error('Failed to update member:', error);
    }
  };

  return (
    <MemberContext.Provider value={{ member, members, fetchMember, fetchMembers, refreshMembers, deleteMember, updateMember, createMember }}>
      {children}
    </MemberContext.Provider>
  );
};