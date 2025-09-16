import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
   return (
      <>
         <h1>Carrito de compras</h1>
         <ItemCounter />
         <ItemCounter />
         <ItemCounter />
      </>
   );
}