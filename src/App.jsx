import { useState, useMemo} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

const memo=useMemo(()=>{
  return count;
}, [count])
  return (
    <>
      <h1>useMemo Hook</h1>
      <button onClick={(e) =>(setCount(count+1))}>Counter</button>
      <p>My number is : {count}</p><br/>
      <button onClick={() => setShow(!show)}>{show ?"You clicked me" : "click me plzz"}</button>
    </> 
  )
}

export default App
