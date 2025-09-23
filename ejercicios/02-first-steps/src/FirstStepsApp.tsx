import { ItemCounter } from "./shopping-cart/ItemCounter";

export interface ItemInCart {
   productName: string;
   quantity: number;
}

const itemsInCart: ItemInCart[] = [
   {
      productName: 'Nintendo Switch 2', quantity: 1
   },
   {
      productName: 'Pro controller', quantity: 2
   },
   {
      productName: 'Super Smash Bros', quantity: 3
   },
]

export function FirstStepsApp() {
   return (
      <>
         <h1>Carrito de compras</h1>
         {
            itemsInCart.map(({ productName, quantity }) => (
               <ItemCounter key={productName} itemName={productName} quantity={quantity} />
            ))
         }
      </>
   );
}