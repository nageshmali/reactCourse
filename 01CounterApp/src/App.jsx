import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const [msg,setMsg] = useState("");

  const increaseValue = () => {
    let newVal;
    newVal = counter + 1;
    setCounter(newVal);
    setMsg("");
  }

  const decreaseValue = () => {
    if(counter > 0){
      let newVal = counter - 1;
      setCounter(newVal);
    }
    else{
      setMsg("Cannot decrease below 0");
    }
  }

  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
      <div className='main'>
        <h1>{counter}</h1>
        <button onClick={increaseValue}>Increase</button>
        <button onClick={decreaseValue} id='decBtn'>Decrease</button>
        <button onClick={resetValue} id='reset'>Reset</button>

        <h3 id='msg'>{msg}</h3>
      </div>
      
    </>
  )
}

export default App
