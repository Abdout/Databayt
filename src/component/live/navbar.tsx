// Navbar.tsx
'use client';
import { atom, cell, compound, organ } from '@/constant/atom';
import React, { useState, useRef, useContext } from 'react'
import { ComponentContext, ComponentType } from './context';
import { components } from './component';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<ComponentType | null>(null);

  const { selectComponent, activeProp, setActiveProp, selectedComponent } = useContext(ComponentContext);
  const [selectedProps, setSelectedProps] = useState<{ [key: string]: any }>({});
  const node = useRef<HTMLDivElement | null>(null);
  const component = components[selectedComponent as keyof typeof components]?.component;

  const handlePropClick = (prop: string) => {
    setActiveProp(prop);
    const newProps = { ...selectedProps };

    // Reset all props to their default values
    Object.keys(newProps).forEach(key => {
      newProps[key] = components[activeSubItem as keyof typeof components]?.props.includes(key) ? false : newProps[key];
    });

    // Set the clicked prop
    newProps[prop] = !newProps[prop];

    if (activeSubItem) {
      setSelectedProps(newProps);
      selectComponent(activeSubItem, newProps);
    }
  }

  const handleItemClick = (item: ComponentType) => {
    setActiveSubItem(item);
    const defaultProps = { size: components[item].props[0] };
    setSelectedProps(defaultProps);
    selectComponent(item, defaultProps);
    setActiveItem(null);
    setActiveProp(components[item].props[0]);
  }

  const renderDropdown = (category: string, items: ComponentType[]) => (
    <li onClick={() => setActiveItem(activeItem === category ? null : category)}>
      <h4 className={`text-black cursor-pointer ${activeItem === category ? 'opacity-100' : 'opacity-50'}`}>{category}</h4>
      {activeItem === category && (
        <div className="absolute text-black mt-4 items-start flex flex-col bg-gray-100 w-max z-10">
          {items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(item);
              }}
              className="relative"
            >
              <div
                className={`flex items-center justify-between space-x-[50px] px-6 hover:bg-gray-200 p-2 w-full cursor-pointer ${activeSubItem === item ? 'opacity-100 bg-gray-300 hover:bg-gray-300' : 'opacity-50'}`}
              >
                <h4 className='justify-start'>{item}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </li>
  );

  return (
    <>
      <nav ref={node} className="flex justify-center pt-1 absolute top-0 w-full z-50">
        <ul className="flex space-x-8 pt-4">
          {renderDropdown('atom', atom)}
          {renderDropdown('compound', compound)}
          {renderDropdown('cell', cell)}
          {renderDropdown('organ', organ)}
        </ul>
      </nav>
      {activeSubItem && (
        <div className="flex flex-col items-start space-y-2">
          <div>
            <label className="font-bold">{components[activeSubItem]?.label}:</label>

          </div>

          <div className="flex items-center space-x-4">
            {components[activeSubItem]?.props.map(prop => (

              <button
                onClick={() => handlePropClick(prop)}
                className={`px-2 py-1 border border-black w-10 ${activeProp === prop ? ' opacity-100' : 'opacity-50'}`}
              >
                {prop}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;