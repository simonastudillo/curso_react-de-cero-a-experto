import { useEffect } from "react"
import { getUserAction } from "./api/get-user.actin"

export const ClientInformation = ({ id }: { id: number }) => {

   // useEffect(() => {
   //    getUserAction(id)
   //       .then(console.log);
   // }, [id])

   return (
      <div className="bg-gradient flex flex-col gap-4">
         <h2 className="text-4xl font-thin text-white">
            Simon - #123
         </h2>
         <p className="text-white text-2xl">Ottawa, Canadá</p>
         <p className="text-white text-xl">Un rol de usuario</p>
      </div>
   )
}
