
import { useState } from "react"

function App() {

  const [color,setColor] = useState('olive');

  const setRang = (e) => {
    
    if(e.target.textContent == 'Red'){
      setColor('red');
    }
    else if(e.target.textContent == 'Blue'){
      setColor('blue');
    }
    else if(e.target.textContent == 'White'){
      setColor('white');
    }
    else if(e.target.textContent == 'Green'){
      setColor('green');
    }
    else if(e.target.textContent == 'Purple'){
      setColor('purple');
    }
    else if(e.target.textContent == 'Orange'){
      setColor('orange');
    }
  }


  return (
    <>
      <div style={{backgroundColor:color}} className="h-screen w-full flex justify-center items-center">
          <div>
            <button onClick={setRang} className="font-10 bg-red-600 px-4 font-medium mx-4 h-12 rounded-md text-3xl">Red</button>
            <button onClick={setRang} className="font-10 bg-white px-4 font-medium mx-4 h-12 rounded-md text-3xl">White</button>
            <button onClick={setRang} className="font-10 bg-blue-600 font-medium px-4 mx-4 h-12 rounded-md text-3xl">Blue</button>
            <button onClick={setRang} className="font-10 bg-green-600 font-medium px-4 mx-4 h-12 rounded-md text-3xl">Green</button>
            <button onClick={setRang} className="font-10 bg-orange-600 font-medium px-4 mx-4 h-12 rounded-md text-3xl">Orange</button>
            <button onClick={setRang} className="font-10 bg-purple-600 font-medium px-4 mx-4 h-12 rounded-md text-3xl">Purple</button>
          </div>
      </div>
    </>
  )
}

export default App
