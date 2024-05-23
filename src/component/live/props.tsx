// Props.tsx
import React, { useContext } from 'react';
import { ComponentContext } from './context';
import { ComponentConfig } from './component';

interface PropsProps {
  activeSubItem: ComponentConfig | null;
}

const Props: React.FC<PropsProps> = ({ activeSubItem }) => {
  const { selectComponent, selectedComponent, props, setActiveProp, activeProp } = useContext(ComponentContext);

  if (!activeSubItem) return null;

  const handlePropChange = (propName: string, value: string) => {
    const newProps = { ...props, [propName]: value };
    selectComponent(selectedComponent, newProps);
    setActiveProp(value);
  };

  return (
    <div className="flex flex-col space-y-4 ml-2 px-4">
      {Object.entries(activeSubItem).map(([key, values]) => (
        <div className='space-y-2' key={key}>
          <h4 className='pl-2'>{key}:</h4>
          <div className="flex flex-wrap justify-start">
            {(values as string[]).map((value) => (
              <button
                key={value}
                onClick={() => handlePropChange(key, value)}
                className={`border-[1.5px] border-black px-[10px] py-1 m-2  text-center ${activeProp === value ? 'opacity-100' : 'opacity-50 hover:opacity-100'} ${value.length === 1  || value.length === 2 ? 'w-10' : ''}`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const PropsRenderer: React.FC = () => {
  const { activeSubItem } = useContext(ComponentContext);

  return activeSubItem ? <Props activeSubItem={activeSubItem} /> : null;
};

export default Props;