
import React from "react";
import './../styles/App.css';
import {useState} from 'react';

const App = () => {
 
  const [selectedOption,setSelectedOption]=useState(null)
  function handleButton(option){
    setSelectedOption(option)
  }
  return (
    <div className="parent">
      <div>
        <h1>Child Component 1</h1>
        <button onClick={()=>handleButton('option1')}>Option1</button>
      </div>
        <div>
          <h1>Child Component 2</h1>
          <button onClick={()=>handleButton('option2')}>Option2</button>
        </div>
        {selectedOption&&<p>Selected Option:{selectedOption}</p>}
    </div>

  )
}

export default App
