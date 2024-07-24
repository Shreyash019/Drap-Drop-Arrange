import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import DropArea from './DropArea';

export default function Example({ grocery, bought, updateFunction }) {
  const [drag, setDrag] = useState(null);
  const [dragged, setDragged] = useState(null);

  useEffect(() => {
    if (drag !== null && dragged !== null) {
      if (dragged) {
        updateFunction(drag, dragged)
      }
      setDrag(null);
      setDragged(null);
    }

  }, [drag, dragged]); // Dependency array still includes both values

  return (
    <div className='w-auto h-auto rounded-md p-4'>
      <div className='w-auto h-auto flex flex-wrap items-start justify-center overflow-auto'>
        <div className='w-96 h-auto p-4 grid grid-cols-1 place-items-center mx-4 border border-gray-light rounded-md'>
          <div className='text-center h-auto'>
            <h1 className='text-2xl break-word font-extrabold text-red'>Pending Items</h1>
          </div>
          {grocery?.map((data, index) => (
            <React.Fragment key={data.id}>
              <DropArea index={index} setDragged={setDragged} listType="grocery" />
              <TaskCard data={data} index={index} setDrag={setDrag} listType="grocery" />
            </React.Fragment>
          ))}
          <DropArea index={grocery.length} setDragged={setDragged} listType="grocery" />
        </div>
        <div className='w-96 h-auto p-4 grid grid-cols-1 place-items-center mx-4 border border-gray-light rounded-md'>
          <div className='w-full h-auto text-center'>
            <h1 className='text-2xl break-word font-extrabold text-red'>Bought Items</h1>
          </div>
          {bought?.map((data, index) => (
            <React.Fragment key={data.id}>
              <DropArea index={index} setDragged={setDragged} listType="bought" />
              <TaskCard data={data} index={index} setDrag={setDrag} listType="bought" />
            </React.Fragment>
          ))}
          <DropArea index={bought.length} setDragged={setDragged} listType="bought" />
        </div>
      </div>
    </div>
  );
}
