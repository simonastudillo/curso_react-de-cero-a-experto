import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"
import { UserContextProvider } from "./context/UserContextProvider"

export const ProfessionalAPP = () => {
   return (
      <UserContextProvider>
         <div className="bg-gradient flex flex-col gap-4">
            <RouterProvider router={appRouter}>

            </RouterProvider>
         </div>
      </UserContextProvider>
   )
}
