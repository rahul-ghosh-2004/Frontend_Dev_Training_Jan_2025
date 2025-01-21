import React, { useState } from "react";

function App() {
  // let randomNumber = 8726348762487;

  let [ randomNumber, setRandomNumber ] = useState(0)

  const handleClick = () => {
    setRandomNumber(randomNumber = Date.now())
  }

  return (
    <>
    <div className="h-screen w-screen bg-slate-400 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-y-5">
        <div className="flex items-center justify-between gap-x-10 mx-10">
          <p>{randomNumber}</p>
          <p>{randomNumber}</p>
          <p>{randomNumber}</p>
        </div>

        <button onClick={handleClick} className="bg-black text-white px-2 py-1 rounded-lg">Generate</button>
      </div>
      </div>
    </>
  )
}

export default App