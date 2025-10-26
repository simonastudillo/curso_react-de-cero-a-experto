export interface User {
   id: number;
   name: string;
   location: string;
   role: string;
}

export const getUserAction = async (id: number) => {
   console.log('función llamada');
   await new Promise((res) => setTimeout(res, 2e3));
   console.log('función resolvió');
   return {
      id,
      name: 'Simón Astudillo',
      location: 'Ottawa, Canadá',
      role: 'Instructor de Software'
   }
}