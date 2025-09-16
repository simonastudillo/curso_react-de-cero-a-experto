import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
   return (
      <>
         <h1>Carrito de compras</h1>
         <ItemCounter itemName="Nintendo Switch 2" quantity={1} />
         <ItemCounter itemName="Pro Controller" quantity={2} />
         <ItemCounter itemName="Super Smash" quantity={3} />
      </>
   );
}