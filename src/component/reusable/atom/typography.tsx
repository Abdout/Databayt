import React from 'react'

interface TypographyProps {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Typography: React.FC<TypographyProps> = ({ size }) => {
  const TagName = size;
  return <TagName>Databayt</TagName>;
}

export default Typography;