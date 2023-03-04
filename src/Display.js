import {useState, useEffect} from 'react'

export default function Display(props) {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(props.getNumbers()); 
    console.log("Inside useEffect of Display");
    console.log("Change in Display.js");
  }, [props.getNumbers])
  

  return (
    <div>{numbers.map((num)=>{
      return <p>{num}</p>
    })}</div>
  )
}
