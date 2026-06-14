import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "../interfaces/auth.response";

interface LoginAction {
   email: string;
   password: string;
}

export const loginAction = async ({ email, password }: LoginAction): Promise<AuthResponse> => {
   try {
      const { data } = await tesloApi.post<AuthResponse>(`/auth/login`, { email, password });

      return data;
   } catch (error) {
      throw error;
   }
}