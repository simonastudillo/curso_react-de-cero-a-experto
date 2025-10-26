import React from "react";

interface MySubTitleProps {
   subTitle: string;
}

export const MySubTitle = React.memo(({ subTitle }: MySubTitleProps) => {
   console.log('MySubTitle re-render');

   console.log('Tarea muy pesada');
   return (
      <>
         <h6 className="text-2xl font-bold">{subTitle}</h6>
         <button className="bg-indigo-500 text-white px-2 py-2 rounded-md cursor-pointer">
            Llamar a función
         </button>
      </>
   )
});
