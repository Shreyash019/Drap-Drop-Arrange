import React from 'react';
import { SortableContext } from '@dnd-kit/sortable';
import Drag from "./Drag";
import Drop from "./Drop";
import Lottie from 'react-lottie';
import NoData from '../../Lottie/NoData.json';

const Arrange = ({ dataArray }) => {
  const { newIdea, oldIdea } = dataArray;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className='w-full h-auto rounded-md overflow-auto'>
      <div className='h-auto overflow-auto flex flex-wrap items-start justify-around'>

        <div className='w-[48%] min-h-80 h-auto border border-blue shadow-md shadow-white-input-light rounded-md'>
          <h2 className='bg-blue text-white text-xl text-center font-extrabold py-2'>New Idea</h2>
          <SortableContext items={newIdea.map(item => item._id)}>
            {newIdea.length > 0 && (
              <>
                {newIdea?.map((data) => (
                  <React.Fragment key={data._id}>
                    <Drag data={data} listType="newIdea" />
                  </React.Fragment>
                ))}
                <Drop index={newIdea.length} listType="newIdea" />
              </>
            )}
            {newIdea.length < 1 && (
              <>
                <div className='w-full h-52 flex items-center justify-center'>
                  <Lottie
                    options={defaultOptions}
                    height={150}
                    width={150}
                  />
                </div>
                <Drop index={newIdea.length} listType="newIdea" />
              </>
            )}
          </SortableContext>
        </div>

        <div className='w-[48%] min-h-80 h-auto border border-blue shadow-md shadow-white-input-light rounded-md'>
          <h2 className='bg-blue text-white text-xl text-center font-extrabold py-2'>Old Idea</h2>
          <SortableContext items={oldIdea.map(item => item._id)}>
            {oldIdea.length > 0 && (
              <>
                {oldIdea?.map((data) => (
                  <React.Fragment key={data._id}>
                    <Drag data={data} listType="oldIdea" />
                  </React.Fragment>
                ))}
                <Drop index={oldIdea.length} listType="oldIdea" />
              </>
            )}
            {oldIdea.length < 1 && (
              <>
                <div className='w-full h-52 flex items-center justify-center'>
                  <Lottie
                    options={defaultOptions}
                    height={150}
                    width={150}
                  />
                </div>
                <Drop index={oldIdea.length} listType="oldIdea" />
              </>
            )}
          </SortableContext>
        </div>

      </div>
    </section>
  );
}

export default Arrange