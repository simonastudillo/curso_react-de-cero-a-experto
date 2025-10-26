interface MyTitleProps {
   title: string;
}

export const MyTitle = ({ title }: MyTitleProps) => {
   console.log('MyTitle re-render')
   return (
      <h1 className="text-3xl">{title}</h1>
   )
}
