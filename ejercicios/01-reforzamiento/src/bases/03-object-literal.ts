const ironman = {
   firstName: 'Tony',
   lastName: 'Stark',
   age: 45,
   address: {
      postalCode: 'ABC123',
      city: 'New York'
   }
}

const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'San José';

console.log(spiderman)
console.log(ironman)