import { UserContext } from "@/09-useContext/context/UserContextProvider"
import { Button } from "@/components/ui/button"
import { use, useContext } from "react"

export const ProfilePage = () => {

   // const { user } = useContext(UserContext);
   const { user } = use(UserContext);

   return (
      <div className="flex flex-col items-center justify-center min-h-screen">
         <h1 className="text-4xl font-bold">Perfil del usuario</h1>
         <hr />

         <pre className="my-4 overflow-x-auto">{JSON.stringify(user, null, 1)}</pre>

         <Button
            variant="destructive"
         >
            Salir
         </Button>
      </div>
   )
}
