const useState = (value: string) => {
   return [
      value,
      (newValue: string) => {
         console.log(newValue)
      }
   ] as const
}

const [name, setName] = useState('Gokú');

console.log(name);
setName('Vegeta');