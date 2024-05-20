// ComponentRenderer.tsx
'use client';
import React, { useContext, useState, useEffect } from 'react';
import { ComponentContext } from './context';
import Welcome from '../reusable/atom/welcome';

const ComponentRenderer: React.FC = () => {
  const { selectedComponent, props } = useContext(ComponentContext);
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (selectedComponent) {
      const [group, componentName] = selectedComponent.split('/');
      
      import(`@/component/reusable/${group}/${componentName}`)
        .then((module) => {
          console.log('module:', module); // Log the imported module
          // Assuming the component is the default export of the module
          setComponent(() => module.default);
        })
        .catch((error) => {
          console.error(`Failed to load component ${selectedComponent}:`, error);
        });
    }
  }, [selectedComponent]);

  console.log('Component:', Component); // Log the Component value

  if (!Component || !props) return null; // Check if props is null before rendering the Component

  return(
    <div className='flex items-center justify-center h-screen'>
       <Component {...props as any} />
    </div>
   
  );
  
};

export default ComponentRenderer;