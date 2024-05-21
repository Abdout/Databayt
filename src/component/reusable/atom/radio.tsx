import React, { useState } from 'react';

const Radio: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="inline-block">
      <label className="flex items-center">
        <input
          type="radio"
          checked={checked}
          onChange={handleChange}
          className="hidden"
        />
        <span
          className={`w-6 h-6 rounded-full border border-black flex items-center justify-center ${checked ? 'bg-black' : 'bg-white'}`}
        >
          {checked && <span className="w-3 h-3 rounded-full bg-white"></span>}
        </span>
      </label>
    </div>
  );
};

export default Radio;