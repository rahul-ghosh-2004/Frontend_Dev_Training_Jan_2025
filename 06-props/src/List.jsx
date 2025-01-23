import React from 'react'
import "./List.css"

function List({ value, key }) {
  return (
    <div
      className='main-container'
    >
      <input type="text" value={value} key={key}/>
      <input type="text" value={value} key={key}/>
      <input type="text" value={value} key={key}/>
    </div>
  )
}

export default List
