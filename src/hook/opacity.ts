import { useState } from 'react';

interface OpacityProps {
  initial?: number;
}

const useOpacity = ({ initial = 0 }: OpacityProps) => {
  const [opacity, setOpacity] = useState<number>(initial);

  const handleButtonClick = (index: number) => {
    setOpacity(index);
  };

  const getOpacity = (index: number) => (index === opacity ? 'opacity-100' : 'opacity-50');

  return { handleButtonClick, getOpacity };
};

export default useOpacity;