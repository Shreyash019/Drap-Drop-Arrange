import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { Helmet } from 'react-helmet';
import Arrange from './Arrange';
import Loader from '../Navigation/Loader';

const DragDropArrange = ({projectData}) =>  {
  const [dataArray, setDataArray] = useState({
    newIdea: undefined,
    oldIdea: undefined,
    updateValue: []
  });

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const { fromList, targetId } = active.data.current;
    const { toList, index } = over.data.current;

    if (fromList === toList) {
      const sortedItems = arrayMove(dataArray[toList], dataArray[toList].findIndex((task) => task._id === targetId), index);
      setDataArray((prev) => ({ ...prev, [toList]: sortedItems }));
    } else {
      const draggedItem = dataArray[fromList].find((task) => task._id === targetId);
      const updatedFromList = dataArray[fromList].filter((task) => task._id !== targetId);
      const updatedToList = [...dataArray[toList].slice(0, index), draggedItem, ...dataArray[toList].slice(index)];

      setDataArray((prev) => ({ ...prev, [fromList]: updatedFromList, [toList]: updatedToList }));
    }
  };

  const fetchData = async () => {
    const { newIdea, oldIdea } = projectData;
    setTimeout(() => {
      setDataArray((prev) => ({ ...prev, newIdea, oldIdea }));
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='w-full h-auto md:w-11/12 lg:w-10/12 py-12 md:p-4 lg:p-12'>
      <div className='w-full h-auto my-2 overflow-auto'>
        <div className='w-full h-auto my-4 overflow-auto'>
          {dataArray.newIdea && dataArray.oldIdea && (
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={dataArray?.newIdea}>
                <Arrange dataArray={dataArray} />
              </SortableContext>
            </DndContext>
          )}
          {!dataArray.newIdea && !dataArray.oldIdea && (
            <>
            <div className='w-full h-auto flex items-center justify-center'><Loader/></div>
            <div className='w-full text-center text-xl font-bold'>
              <span className='text-gradient'>Loading...</span>
            </div>
            </>
          )}
        </div>
      </div>
      <Helmet><title>Task Application | Home</title></Helmet>
    </section>
  );
};

export default DragDropArrange