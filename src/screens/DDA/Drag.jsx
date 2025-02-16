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
                    <div className="w-auto p-2 h-auto bg-yellow">
                        <p className="h-auto text-xs lg:text-sm text-black break-all">{data?.idea}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Drag;