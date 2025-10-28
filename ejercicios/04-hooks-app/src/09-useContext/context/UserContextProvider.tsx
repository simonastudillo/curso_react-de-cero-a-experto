import { createContext, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

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
      const user = users.find(user => user.id === userId);
      if (!user) {
         console.log(`User not found ${userId}`);
         setUser(null);
         setAuthStatus('not-authenticated');
         return false;
      }

      setUser(user);
      setAuthStatus('authenticated');
      return true;
   }

   const handleLogOut = () => {
      setUser(null);
      setAuthStatus('not-authenticated');
      console.log('logout')
   }

   return <UserContext
      value={{
         authStatus: authStatus,
         user: user,
         login: handleLogin,
         logout: handleLogOut
      }}
   >
      {children}
   </UserContext>
}
