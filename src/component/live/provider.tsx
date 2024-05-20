'use client';
import React, { useState } from 'react';
import { ComponentContext, ComponentProps } from './context';
import { component as componentData, ComponentConfig } from './try';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [componentConfig, setComponentConfig] = useState<ComponentConfig | null>(null);
  const [props, setProps] = useState<ComponentProps>({});
  const [activeProp, setActiveProp] = useState<string | null>(null);

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
    <ComponentContext.Provider value={{ selectedComponent, componentConfig, props, selectComponent, activeProp, setActiveProp }}>
      {children}
    </ComponentContext.Provider>
  );
};
