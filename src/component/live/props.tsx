import React, { useContext } from 'react';
import { ComponentContext } from './context';
import { ComponentConfig } from './try';

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
    <div className="flex flex-col space-y-4">
      {Object.entries(activeSubItem).map(([key, values]) => (
        <div key={key}>
          <h4>{key}:</h4>
          <div className="flex space-x-4">
            {(values as string[]).map((value) => (
              <button
                key={value}
                onClick={() => handlePropChange(key, value)}
                className={`w-10 h-8 border-[1.5px] border-black  ${activeProp === value ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
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

export default Props;
