// context.tsx
'use client';
import React from 'react';
import { ButtonSize } from '../nextatom/button';

export type ComponentType = 'Button' | 'Input' | 'Icon';

export interface ComponentProps {
    [key: string]: any;
  }
  
// context.tsx
export interface ContextType {
    selectedComponent: string;
    props: ComponentProps;
    selectComponent: (componentName: string, props: ComponentProps) => void;
    activeProp: string | null;
    setActiveProp: (activeProp: string | null) => void;
    activeSubItem: ComponentType | null; // Add activeSubItem
    setActiveSubItem: (activeSubItem: ComponentType | null) => void; // Add setActiveSubItem
  }
  
  export const ComponentContext = React.createContext<ContextType>({
    selectedComponent: 'Button',
    props: { size: 'lg' },
    selectComponent: () => {},
    activeProp: null,
    setActiveProp: () => {},
    activeSubItem: null, // Initialize activeSubItem
    setActiveSubItem: () => {}, // Initialize setActiveSubItem
  });

