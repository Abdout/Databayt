import React from 'react';

interface ProgressProps {
  type: 'bar' | 'dot';
}

const Progress: React.FC<ProgressProps> = ({ type }) => {
  if (type === 'bar') {
    return (
      <div className="w-72 h-2 bg-gray-300">
        <div className="h-full bg-black w-2/3"></div>
      </div>
    );
  } else if (type === 'dot') {
    return (
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-black rounded-full"></div>
        <div className="w-4 h-4 bg-black rounded-full"></div>
        <div className="w-4 h-4 bg-black rounded-full"></div>
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
      </div>
    );
  } else {
    return null;
  }
};

export default Progress;