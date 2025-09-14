function greet( name: string ): string {
   return `Hola ${name}`;
}

const message: string = greet('Gokú');

console.log(message);

const greet2 = (name: string): string => `Hola ${name}`;


const message2: string = greet2('Vegeta');
console.log(message2);

interface User {
   uid: string;
   username: string;
}


function getUser(): User {
   return {
      uid: 'ABC-123',
      username: 'El_Papi123'
   }
}

const getUser2 = (): User => ({
   uid: 'ABC-123',
   username: 'El_Papi123'
});

const user = getUser();
console.log(user);
const user2 = getUser2();
console.log(user2);

const myNumbers: number[] = [1, 2, 3, 4, 5, 6];

myNumbers.forEach(function (value) {
   console.log({value})
})

myNumbers.forEach( (value) => console.log({value}) );

myNumbers.forEach(console.log);