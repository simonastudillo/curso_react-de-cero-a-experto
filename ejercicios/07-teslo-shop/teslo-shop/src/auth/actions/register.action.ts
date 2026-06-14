import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "../interfaces/auth.response";

interface RegisterActionIterface {
   email: string;
   password: string;
   fullName: string;
}

export const RegisterAction = async ({ email, password, fullName }: RegisterActionIterface): Promise<AuthResponse> => {
   try {
      const { data } = await tesloApi.post<AuthResponse>(`/auth/register`, { email, password, fullName });

      return data;
   } catch (error) {
      throw error;
   }
}