import { use, type JSX } from "react"
import { UserContext } from "../context/UserContextProvider"
import { Navigate } from "react-router";

interface PrivateRouteProps {
   element: JSX.Element
}

export const PrivateRoute = ({ element }: PrivateRouteProps) => {

   const { authStatus } = use(UserContext);

   if (authStatus === 'checking') {
      return <div>Loading....</div>
   }

   if (authStatus === 'authenticated') {
      return element;
   }

   return <Navigate to="/login" replace />
}
