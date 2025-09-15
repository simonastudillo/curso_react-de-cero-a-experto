const person = {
   name: 'Tony',
   age: 45,
   key: 'Ironman',
}

// const name = person.name;
// const age = person.age;
// const key = person.key;

const {name:ironmanName, age, key} = person;

console.log(ironmanName, age, key);

interface Hero {
   name: string;
   age: number;
   key: string;
   rank?: string;
}

const useContext = ( {key, name, age, rank}:Hero ) => {
   // const {age} = hero;
   return {
      keyName: key,
      user: {
         name,
         age,
      },
      rank
   }   
}

const {rank, keyName, user:{name}} = useContext(person);

console.log({rank, keyName, name});