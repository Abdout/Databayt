import React, { useState } from 'react';
import { Icon } from "@iconify/react";

const Check: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="inline-block">
      <label className="flex items-center">
        <input
          type="Checkbox"
          checked={checked}
          onChange={handleChange}
          className="hidden"
        />
        <span
          className={`w-6 h-6 border border-black flex items-center justify-center ${checked ? 'bg-black' : 'bg-white'}`}
        >
          {checked && 
          <span className="text-white text-lg">
            <Icon icon="ion:checkmark-sharp" width={20} />
            </span>}
        </span>
      </label>
    </div>
  );
};

export default Check;