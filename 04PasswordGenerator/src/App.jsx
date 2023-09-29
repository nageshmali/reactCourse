import { useEffect, useRef, useState } from "react"


function App() {

  // useStates
  const [password,setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [copy, setCopy] = useState("Copy");
  const [copyColor, setCopyColor] = useState('bg-blue-700');


  //useRef
  const passwordRef = useRef(null);

  // function for password
  const passwordGenerator = ()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "123456789";
    let chars = "!@#$%^&*()-_~";

    for(let i=1;i<=length;i++){
      let index = Math.floor(Math.random() * str.length + 1);

      if(numbersAllowed){
        str += numbers;
      }

      if(charsAllowed){
        str += chars;
      }

      pass += str.charAt(index);
    }

    setPassword(pass);
  }

  //copy function
  const copytoClip = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopy("Copied");
    setCopyColor('bg-green-700');
  }

  // useEffect
  useEffect(()=>{
    passwordGenerator();
    setCopy("Copy");
    setCopyColor('bg-blue-700')
  },[length,numbersAllowed,charsAllowed])

  return (
    <>

      {/* MainBg */}
      <div className="w-full bg-gray-700 text-white h-screen items-center flex flex-col justify-center">

        {/* Inner Container */}
        <div className="bg-gray-900 rounded-md flex flex-col items-center justify-center py-16 px-16">

          {/* Input Section */}
          <div className="flex  w-96 items-center space-x-2 ">
            <input
              className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-lg placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-whitw/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              
              type="button"
              onClick={copytoClip}
              className={`rounded-md ${copyColor} px-3 py-2 text-lg font-semibold text-white`}
            >
              {copy}
            </button>
          </div>

          {/* Length Section */}
          <div className="flex  mt-6 text-lg">
            <input type="range" value={length} min={6} max={20} onChange={(e)=>{setLength(e.target.value)}}/>
            <label className="ml-2" htmlFor="">Length : {length}</label>

            <input className="ml-4" type="checkbox" name="" id="" defaultChecked={numbersAllowed} onChange={(e)=>{
              setNumbersAllowed(prev => !prev);
            }}/>
            <label className="ml-1" htmlFor="">Numbers</label>

            <input className="ml-4" type="checkbox" name="" id="" defaultChecked={charsAllowed} onChange={(e)=>{
              setCharsAllowed(prev => !prev);
            }}/>
            <label className="ml-1" htmlFor="">Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
