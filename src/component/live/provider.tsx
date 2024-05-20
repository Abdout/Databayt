
// provider.tsx
'use client';
import React, { useState } from 'react';
import { ComponentContext, ComponentProps, ContextType } from './context'; // Import ContextType
import { component as componentData, ComponentConfig } from './component';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const defaultComponent = 'live/welcome';
  const [selectedComponent, setSelectedComponent] = useState<string>(defaultComponent);
  const [componentConfig, setComponentConfig] = useState<ComponentConfig | null>(null);
  const [props, setProps] = useState<ComponentProps>({});
  const [activeProp, setActiveProp] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<ComponentConfig | null>(null); // Lifted state up

  const selectComponent = (componentPath: string, newProps: ComponentProps) => {
    console.log(`selectComponent called with ${componentPath}`);
    const [dir, componentName] = componentPath.split('/');

    if (componentData[dir] && componentData[dir][componentName]) {
      console.log(`Component ${componentName} found in ${dir}`);
      setSelectedComponent(componentPath);
      setComponentConfig(componentData[dir][componentName]);
      setProps(newProps);
    } else {
      console.error(`Component ${componentName} not found in ${dir}`);
    }
  };

  return (
    <ComponentContext.Provider value={{ 
      selectedComponent, 
      componentConfig, 
      props, 
      selectComponent, 
      activeProp, 
      setActiveProp,
      activeSubItem, // Include activeSubItem in the context value
      setActiveSubItem, // Pass setActiveSubItem function as well
    }}>
      {children}
    </ComponentContext.Provider>
  );
};
