import { useState } from "react";

interface Props {
   itemName: string;
   quantity?: number;
}

export const ItemCounter = ({ itemName, quantity }: Props) => {

   // const [counter, setCounter] = useState(quantity);

   const handleClick = () => {
      console.log(`Click en ${itemName}`);
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
            onClick={handleClick}
         >+1</button>
         <span>{quantity ?? 1}</span>
         <button>-1</button>
      </section>
   )
}
