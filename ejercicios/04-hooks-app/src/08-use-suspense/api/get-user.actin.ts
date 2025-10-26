export interface User {
   id: number;
   name: string;
   location: string;
   role: string;
}

export const getUserAction = async (id: number) => {
   await new Promise((res) => setTimeout(res, 2e3));

   return {
      id,
      name: 'Simón Astudillo',
      location: 'Ottawa, Canadá',
      role: 'Instructor de Software'
   }
}