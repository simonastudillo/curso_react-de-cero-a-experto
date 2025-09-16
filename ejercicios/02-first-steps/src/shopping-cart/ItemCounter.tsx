interface Props {
   itemName: string;
   quantity?: number;
}

export const ItemCounter = ({ itemName, quantity }: Props) => {
   return (
      <section style={{
         display: 'flex',
         alignItems: 'center',
         gap: 10,
         marginTop: 10
      }}>
         <span style={{
            width: 150
         }}>{itemName}</span>
         <button>+1</button>
         <span>{quantity ?? 1}</span>
         <button>-1</button>
      </section>
   )
}
