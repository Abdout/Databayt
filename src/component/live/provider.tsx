// provider.tsx
'use client';
import React, { useState } from 'react';
import { ComponentContext, ComponentProps, ComponentType } from './context';
import { components } from './component';

interface ProviderProps {
    children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState<string>(''); // Initialize with empty string
  const [props, setProps] = useState<ComponentProps>({});
  const [activeProp, setActiveProp] = useState<string | null>(null);

  const selectComponent = (componentName: string, newProps: ComponentProps) => {
    if (components[componentName]) {
      setSelectedComponent(componentName);
      setProps(newProps); // Overwrite old props with new props
    } else {
      console.error(`Component ${componentName} not found`);
    }
  };

  return (
    <ComponentContext.Provider value={{ selectedComponent, props, selectComponent, activeProp, setActiveProp }}>
      {children}
    </ComponentContext.Provider>
  );
};