import type { User } from '@/interfaces/user.interface';
import { create } from 'zustand';
import { loginAction } from '../actions/login.action';

type AuthState = {
   user: User | null,
   token: string | null,

   login: (email: string, password: string) => Promise<boolean>
}

export const useAuthStore = create<AuthState>()((set) => ({
   user: null,
   token: null,
   login: async (email: string, password: string) => {

      try {
         const { token, user } = await loginAction({ email, password });
         localStorage.setItem("token", token);
         set({ token: token, user: user });
         return true;
      } catch {
         localStorage.removeItem("token");
         set({ token: null, user: null });
         return false;
      }
   }
}))