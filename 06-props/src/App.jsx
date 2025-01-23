import React from 'react'
import List from './List'
import "./App.css"

function App() {
  const data = [
    "value1",
    "value2",
    "value3",
    "value4",
    "value5",
    "value6",
    "value7",
    "value8",
    "value9",
    "value10"
  ]

  return (
    <div className='container'>
      {
        data.map((value, index) => {
          return <List value={value} key={index}/>
        })
      }
    </div>
  )
}

export default App
