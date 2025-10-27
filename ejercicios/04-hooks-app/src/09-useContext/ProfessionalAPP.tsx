import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"

export const ProfessionalAPP = () => {
   return (
      <div className="bg-gradient flex flex-col gap-4">
         <RouterProvider router={appRouter}>

         </RouterProvider>
      </div>
   )
}
