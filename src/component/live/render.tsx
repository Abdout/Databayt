// ComponentRenderer.tsx
'use client';
import React, { useContext, useEffect, useState } from 'react';
import { ComponentContext } from './context';
import { components } from './component'; // Import from './components'
import Welcome from './welcome';

const ComponentRenderer: React.FC = () => {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  const { selectedComponent, props } = useContext(ComponentContext);

  useEffect(() => {
    console.log('Running effect', { selectedComponent, props });
    if (!selectedComponent || selectedComponent === 'Welcome') {
      setComponent(() => Welcome);
      return;
    }

    const SelectedComponent = components[selectedComponent as keyof typeof components]?.component; // Access the component property
    if (SelectedComponent) {
      console.log('Found component', { SelectedComponent });
      setComponent(() => SelectedComponent);
    } else {
      console.error(`No component found for key "${selectedComponent}"`);
    }
  }, [selectedComponent, props]); // Include props in the dependency array
  console.log('Rendering', { Component, props });

  if (!Component) return null;

  return (
    <div className="flex items-center justify-center h-screen">
      <Component {...props} />
    </div>
  );
};

export default ComponentRenderer;