import { useCounterStore } from "@/auth/store/auth.store";
import { Button } from "@base-ui/react/button"

export const ProductPage = () => {

   const { count, inc, dec } = useCounterStore();

   return (
      <>
         <h1 className="text-3xl font-montserrat">Count: {count}</h1>
         <Button onClick={inc}>+1</Button>
         <Button onClick={dec}>-1</Button>
      </>
   )
}
