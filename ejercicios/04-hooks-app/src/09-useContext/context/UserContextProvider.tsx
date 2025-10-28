import { createContext, useState, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data";

// interface UserContextProps {
//    children: React.ReactNode
// }

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
   // state
   authStatus: AuthStatus;
   user: User | null;
   // Methods
   login: (userId: number) => boolean;
   logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

   const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
   const [user, setUser] = useState<User | null>(null);

   const handleLogin = (userId: number) => {
      console.log(userId);
      return true;
   }

   const handleLogOut = () => {
      console.log('logout')
   }

   return <UserContext
      value={{
         authStatus: authStatus,
         user: null,
         login: handleLogin,
         logout: handleLogOut
      }}
   >
      {children}
   </UserContext>
}
