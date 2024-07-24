import React, { useState } from 'react';
import { PiNotepadFill } from "react-icons/pi";
import AddIdea from '../DDA/AddIdea';

const Header = ({handleNewData}) => {
  const [ideaTabOpen, setIdeaTabOpen] = useState(false)
  return (
    <>
      <nav className='w-full h-auto p-2 float-left overflow-auto bg-black flex items-center justify-center'>
        <div className='w-2/5 mdw-3/5 lg:w-4/5 h-auto px-6'>
            <span className='font-bold text-white text-xl lg:text-2xl flex items-center justify-start'><PiNotepadFill/>&nbsp;DDA</span>
        </div>
        <div className='w-3/5 md:w-2/5 lg:w-1/5 h-auto flex items-center justify-end px-4'>
          <button className='text-sm lg:text-lg font-bold text-white border p-2 rounded-lg hover:bg-white hover:text-black border-white active:bg-gray' onClick={() => setIdeaTabOpen(!ideaTabOpen)}>{ideaTabOpen ? "Cancel" : "New Idea"}</button>
        </div>
      </nav>
      {ideaTabOpen && (
        <div className='float-left overflow-auto relative w-full'>
          <AddIdea handleNewData={handleNewData} setIdeaTabOpen={setIdeaTabOpen}/>
        </div>
      )}
    </>
  )
}

export default Header