"use client";
import { atom, cell, compound, organ } from '@/constant/atom';
import React, { useState, useEffect, useRef, ReactElement } from 'react'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<ReactElement | null>(null);

  const node = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && node.current.contains(e.target as Node)) {
      return;
    }
    setActiveItem(null);
    setActiveSubItem(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const atom = ['input', 'button', 'icon', 'radio', 'image'];
  // const compound = ['navbar', 'sidebar', 'header', 'modal', 'breadcrumb', 'accordion'];
  // const cell = ['Dashboard', 'Notification', 'Table', 'Search Bar', 'Breadcrumb'];
  // const organ = ['Workflow Editor', 'Integration Hub', 'Reporting Dashboard', 'User Management', 'Settings Panel'];
  
  const handleItemClick = async (item: string) => {
    setActiveSubItem(activeSubItem === item ? null : item);
    if (atom.includes(item)) {
      const Component = (await import(`@/component/nextatom/${item}`)).default;
      setSelectedComponent(<Component />);
    }
    // add similar code for compound if needed
    setActiveItem(null);
  }
  const renderDropdown = (category: string, items: string[]) => (
    <li onClick={() => setActiveItem(activeItem === category ? null : category)}>
      <h4 className={`text-black cursor-pointer ${activeItem === category ? 'opacity-100' : 'opacity-50'}`}>{category}</h4>
      {activeItem === category && (
        <div className="absolute text-black mt-4 items-start flex flex-col bg-gray-100 w-max">
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
      <div className="flex justify-center items-center h-screen">
        {selectedComponent}
      </div>
    </>
  )
}

export default Navbar

