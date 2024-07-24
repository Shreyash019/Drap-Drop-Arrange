import React, { useState } from 'react';

const DropArea = ({ index, setDragged, listType}) => {
  const [isOver, setIsOver] = useState(false);

  const handleDragEnter = () => {
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragged({toList:listType, index});
    setIsOver(false)
  };

  return (
    <section
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={isOver ? `w-80 h-8 border border-gray rounded-lg flex items-center justify-center text-sm text-gray` : `w-80 h-2 opacity-0`}
    >
      DropArea
    </section>
  );
};

export default DropArea;
