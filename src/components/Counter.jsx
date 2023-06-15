import { useState } from "react";
import '../App.css'

export default function Counter () {
  const [count, setCount] = useState(0)
  return(
    <>
    <div className="counter-div">
    <h1>{count}</h1>
    <button onClick={ () => setCount(count+1) }>+</button>
    <button className="minus" onClick={ () => setCount(count-1) }>-</button>
    <button onClick={ () => setCount(0) }>Reset</button>

    </div>
    </>
  )
}