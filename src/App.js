import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Display from './Display';


const tripleNumber = (num) => {
  console.log("Change in App file");
  console.log("Second change");

  console.log("Branch changes in appjs");
  console.log("Asif changes");
  for (let i=0;i<=1999999999;i++) {

  }
  return num*3;
}

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('a');
  //const newNumber = tripleNumber(number);

  // const getNumbers = () => {
  //   return [number, number+2, number+4];
  // }

  const getNumbers = useCallback(
    () => {
      return [number, number+2, number+4];
    },
    [number],
  )
  

  const newNumber = useMemo(()=>{
    return tripleNumber(number);
  },[number]);

  return (
    <div className="App">
      <h4>{number}</h4>
      <h4>{text}</h4>
      <h4>{newNumber}</h4>

      <button onClick={()=>{
        setNumber(number+1)
      }}>Change number
      </button>

      <br/><br/>

      <button onClick={()=>{
        setText(text+'a')
      }}>
        Change text
      </button>

      <Display getNumbers={getNumbers}/>
    </div>
  );
}

export default App;
