import React, { useState } from 'react';

const Radio: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="inline-block">
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          checked={checked}
          className="hidden"
        />
        <span
          onClick={handleClick}
          className={`w-6 h-6 rounded-full border border-black flex items-center justify-center`}
        >
          {checked && <span className="w-4 h-4 rounded-full bg-black"></span>}
        </span>
      </label>
    </div>
  );
};

export default Radio;