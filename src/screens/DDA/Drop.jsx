import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const Drop= ({ index, setDragged, listType }) => {
    const { isOver, setNodeRef } = useDroppable({
        id: `${listType}-${index}`,
        data: { toList: listType, index },
    });

    const handleDrop = (e) => {
        e.preventDefault();
        setDragged({ toList: listType, index });
    };

    return (
        <section
            ref={setNodeRef}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className={`w-auto h-16 rounded-lg flex items-center justify-center text-xs text-secondary_shadow ${isOver ? ` opacity-100` : `opacity-0`}`}
            style={{ pointerEvents: 'none' }}
        >
        </section>
    );
};

export default Drop 