import { useState } from "react";

interface Props {
   itemName: string;
   quantity?: number;
}

export const ItemCounter = ({ itemName, quantity = 1 }: Props) => {

   const [count, setCounter] = useState(quantity);

   const handleAdd = () => {
      setCounter(count + 1);
   }

   const handleSubtract = () => {
      if (count === 1) return;
      setCounter(count - 1);
   }

   return (
      <section style={{
         display: 'flex',
         alignItems: 'center',
         gap: 10,
         marginTop: 10
      }}>
         <span style={{
            width: 150
         }}>{itemName}</span>
         <button
            onClick={handleAdd}
         >+1</button>
         <span>{count ?? 1}</span>
         <button
            onClick={handleSubtract}
         >-1</button>
      </section>
   )
}
