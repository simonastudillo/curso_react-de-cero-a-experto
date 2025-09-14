function greet( name: string ): string {
   return `Hola ${name}`;
}

const message: string = greet('Gokú');

console.log(message);

const greet2 = (name: string): string => {
   return `Hola ${name}`;
}


const message2: string = greet2('Vegeta');
console.log(message2);

function getUser() {
   return {
      uid: 'ABC-123',
      username: 'El_Papi123'
   }
}

const getUser2 = () => {
   return {
      uid: 'ABC-123',
      username: 'El_Papi123'
   }
}

const user = getUser();
console.log(user);
const user2 = getUser2();
console.log(user2);