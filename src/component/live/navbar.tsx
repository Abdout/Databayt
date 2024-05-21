
// Navbar.tsx
'use client';
import React, { useContext, useState } from 'react';
import { ComponentContext } from './context';
import Dropdown from './dropdown';
import { component, ComponentConfig } from './component';

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { selectComponent, activeSubItem, setActiveSubItem } = useContext(ComponentContext); // Updated to include setActiveSubItem

  const handleItemClick = (group: string, componentName: string, item: ComponentConfig) => {
    console.log(`handleItemClick called with group: ${group}, componentName: ${componentName}, item: ${JSON.stringify(item)}`);
    const defaultProps = { 
      size: item.size[0], 
      color: item.color ? item.color[0] : undefined,
      type: item.type ? item.type[0] : undefined 
    };
    selectComponent(`${group}/${componentName}`, defaultProps);
    setActiveItem(null);
    setActiveSubItem(item); // Update activeSubItem when a component is selected
  };

  return (
    <div className="">
      <nav className="flex justify-center pt-1 absolute top-0 w-full z-50">
        <ul className="flex space-x-8 pt-4">
          {Object.entries(component).map(([category, items]) => (
            <Dropdown
              key={category}
              category={category}
              items={items}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              activeSubItem={activeSubItem}
              handleItemClick={handleItemClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
