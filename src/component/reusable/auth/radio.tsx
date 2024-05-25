import React from 'react';

interface RadioProps {
  checked: boolean;
  onCheck: () => void;
}

const Radio: React.FC<RadioProps> = ({ checked, onCheck }) => {
  return (
    <div className="inline-block">
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          checked={checked}
          className="hidden"
          onChange={onCheck}
        />
        <span
          onClick={onCheck}
          className={`w-6 h-6 rounded-full border border-black flex items-center justify-center`}
        >
          {checked && <span className="w-4 h-4 rounded-full bg-black"></span>}
        </span>
      </label>
    </div>
  );
};

export default Radio;