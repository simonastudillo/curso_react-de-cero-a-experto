
const myArray: number[] = [1, 2, 3, 4, 5, 6];

myArray.push(10);
myArray.push(11);


for (const myNumber of myArray) {
   console.log(myNumber + 10)
}

const myArray2 = [...myArray];
myArray2.push(7);

console.log(myArray);
console.log(myArray2);