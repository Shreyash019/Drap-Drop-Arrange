import Example from "./screens/Example"


function App() {
  const grocery = [{ id: 11, item: "Coffee" }, { id: 12, item: "Tea" }, { id: 13, item: "Sugar" }, { id: 14, item: "Milk" }]
  const bought = [{ id: 10, item: "Bottle" }]

  function updateFunction(drag, dragged) {
    if (drag.fromList == dragged.toList) {
      if (drag.fromList === 'bought') {
        const popValIndex = bought.findIndex(data => data.id === drag.targetId);
        const filterValue = bought[popValIndex]
        bought.splice(popValIndex, 1);
        bought.splice(dragged.index, 0, filterValue)
      } else if (drag.fromList === 'grocery') {
        const popValIndex = grocery.findIndex(data => data.id === drag.targetId);
        const filterValue = grocery[popValIndex]
        grocery.splice(popValIndex, 1);
        grocery.splice(dragged.index, 0, filterValue)
      }
    }
    else if (drag.fromList === 'grocery' && dragged.toList === 'bought') {
      const popValIndex = grocery.findIndex(data => data.id === drag.targetId);
      const filterValue = grocery[popValIndex]
      grocery.splice(popValIndex, 1);
      bought.splice(dragged.index, 0, filterValue)
    }
    else if (drag.fromList === 'bought' && dragged.toList === 'grocery') {
      const popValIndex = bought.findIndex(data => data.id === drag.targetId);
      const filterValue = bought[popValIndex]
      bought.splice(popValIndex, 1);
      grocery.splice(dragged.index, 0, filterValue)
    }
  }

  return (
    <div className="min-h-screen h-auto overflow-auto p-2">
      <div className="w-full h-auto p-2 flex items-center justify-center my-4">
        <h1 className="text-3xl text-navy font-extrabold">Drag, Drop and Arrange</h1>
      </div>
      <Example grocery={grocery} bought={bought} updateFunction={updateFunction} />
    </div>
  )
}

export default App
