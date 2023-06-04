// Destructuring

// Array Destructuring

let [a,b] = ['Hello', 'Max'];
console.log(a) // Hello
console.log(b) // Max

const numbers = [1,2,3];
[num1, , num3] = numbers;
console.log(num1,num3)

person = { name: 'Max', age: 28 }
let { name, age } = person;
console.log('name: ', name); // Max
console.log('age: ', age); // undefined