import React from 'react';
import { ComponentConfig } from './component';

interface DropdownProps {
  category: string;
  items: { [key: string]: ComponentConfig };
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  activeSubItem: ComponentConfig | null;
  handleItemClick: (group: string, componentName: string, item: ComponentConfig) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  category,
  items,
  activeItem,
  setActiveItem,
  activeSubItem,
  handleItemClick,
}) => (
  <li onClick={() => setActiveItem(activeItem === category ? null : category)}>
    <h4 className={`text-black cursor-pointer ${activeItem === category ? 'opacity-100' : 'opacity-50'}`}>{category}</h4>
    {activeItem === category && (
      <div className="absolute text-black mt-4 items-start flex flex-col bg-gray-100 w-40 z-10">
        {Object.entries(items).map(([key, value]) => (
          <div
            key={key}
            onClick={(e) => {
              e.stopPropagation();
              handleItemClick(category, key, value);
            }}
            className="relative w-full"
          >
            <div
              className={`flex items-center justify-between space-x-[50px] px-6 hover:bg-gray-200 p-2 w-full cursor-pointer ${activeSubItem?.size === value.size ? 'opacity-100 bg-gray-300 hover:bg-gray-300' : 'opacity-50'}`}
            >
              <h4 className='justify-start'>{key}</h4>
            </div>
          </div>
        ))}
      </div>
    )}
  </li>
);

export default Dropdown;
