import React from 'react'

interface FontProps {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Font: React.FC<FontProps> = ({ size }) => {
  const TagName = size;
  return <TagName>Databayt</TagName>;
}

export default Font;