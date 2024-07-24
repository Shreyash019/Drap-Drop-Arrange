import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './screens/Navigation/Header';
import DragDropArrange from './screens/DDA/DragDropArrange';
import projectDataJson from "./Data/data.json"

function App() {

  const [projectData, setProjectData] = useState(projectDataJson)
  function handleNewData(data){
    const tempData = projectData.newIdea;
    const maxNumber = (Math.random() * 100) * 1000;
    tempData.push({_id: maxNumber, idea: data});
    setProjectData({...data, newIdea: tempData})
  }

  return (
    <div className="h-auto overflow-auto">
      <div className='w-full h-auto overflow-auto fixed z-50'>
      <Header handleNewData={handleNewData}/>
      </div>
      <div className="h-auto overflow-auto my-16 flex items-center justify-center">
        <DragDropArrange projectData={projectData}/>
      </div>
      <Toaster
        toastOptions={{
          className: 'text-xs',
          duration: 3000,
        }}
      />
    </div>
  );
}

export default App;
