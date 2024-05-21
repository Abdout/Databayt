import Project from '@/component/card/project'
import React from 'react'

interface CardProps {
    type: 'project' | 'col';
  }
  
  const Card: React.FC<CardProps> = ({ type }) => {
    if (type === 'project') {
        return (
        <Project />
        );
      } else if (type === 'col') {
        return (
          <div>
            col
          </div>
        );
      } else {
        return null;
      }
    };

export default Card