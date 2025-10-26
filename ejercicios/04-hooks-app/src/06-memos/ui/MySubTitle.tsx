interface MySubTitleProps {
   subTitle: string;
}

export const MySubTitle = ({ subTitle }: MySubTitleProps) => {
   console.log('MySubTitle re-render')
   return (
      <>
         <h6 className="text-2xl font-bold">{subTitle}</h6>
         <button className="bg-indigo-500 text-white px-2 py-2 rounded-md cursor-pointer">
            Llamar a función
         </button>
      </>
   )
}
