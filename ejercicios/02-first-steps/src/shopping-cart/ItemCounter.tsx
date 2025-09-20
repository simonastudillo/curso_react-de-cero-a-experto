import { useState } from "react";
// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

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
      <section className={styles.itemRow}>
         <span
            className={`${styles.itemText} ${count === 1 ? styles.colorRed : styles.colorBlack}`}
         >{itemName}</span>
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
