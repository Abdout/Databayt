'use client';
import React, { useState, useContext } from 'react';
import { ComponentContext } from './context';
import Dropdown from './dropdown';
import Props from './props';
import { component, ComponentConfig } from './try';

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<ComponentConfig | null>(null);
  const { selectComponent } = useContext(ComponentContext);

  const handleItemClick = (group: string, componentName: string, item: ComponentConfig) => {
    console.log(`handleItemClick called with group: ${group}, componentName: ${componentName}, item: ${JSON.stringify(item)}`);
    const defaultProps = { 
      size: item.size[0], 
      color: item.color ? item.color[0] : undefined 
    };
    selectComponent(`${group}/${componentName}`, defaultProps);
    setActiveItem(null);
    setActiveSubItem(item);
  };

  return (
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
      <Props activeSubItem={activeSubItem} />
    </nav>
  );
};

export default Navbar;
