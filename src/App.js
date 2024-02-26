import Keypad from './keypad.js'
import './App.css';
import { useState } from 'react';

function App() {

  let [input,setInput] = useState('')
  function handleClick(value){

    setInput(input+value) //Previvos input + new input

  }

  function calculate(value){

    let output=eval(input)
    setInput(output)
  }
  function clear(){
    setInput('')
  }

  return (
    <div className="container">
      <h1>Calculator App using React</h1>
      <div className='calculator'>
        <input type='text' value={input} className='output' />
        <Keypad handleClick={handleClick} calculate={calculate} clear={clear}/>
      </div>
    </div>
  );
}

export default App;
