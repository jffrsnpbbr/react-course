// Spread & Rest Operators


// Spread Operator

const oldArray = [1,2,3];
const newArray = [...oldArray, 4, 5];

console.info(oldArray)
console.info(newArray);

const oldObject = { firstName: 'Maximilian', lastName: 'Schwarzmüller'};
const newObject = { ...oldObject, age: 28 }

console.info(oldObject);
console.info(newObject);

// Rest Operator

function sortArgs(...args) {
  return args.sort();
}

console.info(sortArgs(5,6,4,2));

const filter = (...args) => args.filter(el => el == 1)
console.info(filter(...newArray))