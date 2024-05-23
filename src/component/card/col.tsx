import React from 'react';
import { Icon } from "@iconify/react";

const Col: React.FC = () => {
    return (
        <div className="w-64 border-black border-2">
  <div className="h-44 flex items-center justify-center">
    <Icon icon="ph:image-square-thin" width={100} />
  </div>
  <div className="h-28 flex flex-col items-center justify-center">
    <h1>Title</h1>
    <p>Description</p>
  </div>
</div>
    );
};

export default Col;