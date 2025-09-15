const charactersNames = ['Gokú', 'Vegeta', 'Trunks'];

// const [ p1, p2, p3 ] = charactersNames;
const [,,p3] = charactersNames;

console.log({
   p3
})

const returnsArrayFn = () => {
   return ['ABC', 123] as const;
}

const [ letters, numbers ] = returnsArrayFn();

console.log( numbers + 100 );