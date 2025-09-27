import { useState } from "react"

export const MyCounterApp = () => {

   const [counter, setCounter] = useState(5)

   const handleAdd = () => {
      setCounter(counter + 1);
   }

   const handleSubtract = () => {
      setCounter((prevstate) => prevstate - 1);
   }

   const handleReset = () => {
      setCounter(5);
   }

   return (
      <div style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center'
      }}>
         <h1>{counter}</h1>
         <div style={{
            display: 'flex',
            gap: 10
         }}>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Reset</button>
         </div>
      </div>
   )
}
