import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { IoMdMove } from "react-icons/io";

const Drag = ({ data, listType }) => {
    
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: data._id,
        data: { fromList: listType, targetId: data._id },
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        opacity: isDragging ? 0.5 : 1,
        pointerEvents: isDragging ? 'none' : 'auto',
    };

    return (
        <>
            <section
                className="w-auto h-auto bg-yellow rounded-md border overflow-hidden m-2"
                ref={setNodeRef}
                style={style}
                {...listeners}
                {...attributes}
            >
                <div>
                    <div className="w-auto p-2 h-20 bg-yellow">
                        <div className="w-auto flex items-start -translate-y-2 translate-x-2 justify-end">
                            <span className='w-fit h-fit rounded-full p-0.5 overflow-hidden text-[0.6rem] bg-navy text-red'><IoMdMove /></span>
                        </div>
                        <p className="h-auto text-xs lg:text-sm text-black line-clamp-2 break-all overflow-hidden">{data?.idea}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Drag;