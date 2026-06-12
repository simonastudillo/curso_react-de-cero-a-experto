import type { User } from '@/interfaces/user.interface';
import { create } from 'zustand';
import { loginAction } from '../actions/login.action';
import { checkAuthAction } from '../actions/check-auth.action';

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

type AuthState = {
   user: User | null,
   initialsUser: string | null,
   token: string | null,
   authStatus: AuthStatus,

   login: (email: string, password: string) => Promise<boolean>,
   logout: () => void,
   checkAuthStatus: () => Promise<boolean>,
}

export const useAuthStore = create<AuthState>()((set) => ({
   user: null,
   initialsUser: null,
   token: null,
   authStatus: "checking",
   login: async (email: string, password: string) => {

      try {
         const { token, user } = await loginAction({ email, password });
         localStorage.setItem("token", token);
         const initialsUser = user.fullName.split(' ').map(name => name[0]).join('');
         set({ token: token, user: user, initialsUser: initialsUser, authStatus: "authenticated" });
         return true;
      } catch {
         localStorage.removeItem("token");
         set({ token: null, user: null, initialsUser: null, authStatus: "not-authenticated" });
         return false;
      }
   },
   logout: () => {
      set({ token: null, user: null, initialsUser: null, authStatus: "not-authenticated" });
      localStorage.removeItem("token");
   },
   checkAuthStatus: async () => {
      try {
         const { user, token } = await checkAuthAction();
         const initialsUser = user.fullName.split(' ').map(name => name[0]).join('');
         set({ token: token, user: user, initialsUser: initialsUser, authStatus: "authenticated" });
         return true;
      } catch {
         localStorage.removeItem("token");
         set({ token: null, user: null, initialsUser: null, authStatus: "not-authenticated" });
         return false;
      }
   }
}))