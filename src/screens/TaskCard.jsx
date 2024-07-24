import React from 'react'

const TaskCard = ({ data, index, setDrag, listType }) => {
  const handleDragStart = (e) => {
    setDrag({ fromList: listType, targetId: data.id });
  };
  return (
    <section key={data.id} draggable onDragStart={handleDragStart} onDragEnd={() => setDrag(null)} className='w-full h-12 my-2 font-bold flex items-center justify-center'>
      <div className='w-80 bg-white-input-light rounded-md hover:bg-gradient-to-r from-blue to-blue_border flex items-center justify-center text-blue hover:text-white'>
        <div className='w-1/5 p-2 h-auto text-center text-xl font-extrabold'><p className='w-8 h-8 rounded-full bg-blue'>{index}</p></div>
        <p className='w-3/5 p-2 h-auto text-center text-xl font-extrabold'>{data.item}</p>
        <p className='w-1/5 p-2 h-auto text-center text-xl font-extrabold'></p>
      </div>
    </section>
  )
}

export default TaskCard