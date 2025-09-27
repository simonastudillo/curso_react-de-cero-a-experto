import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
   const [counter, setCounter] = useState(initialValue)

   const handleAdd = () => {
      setCounter(counter + 1);
   }

   const handleSubtract = () => {
      setCounter((prevstate) => prevstate - 1);
   }

   const handleReset = () => {
      setCounter(initialValue);
   }
   return {
      counter,
      handleAdd,
      handleSubtract,
      handleReset
   };
}
