// Understanding "let" and "const"

var myName = 'Max';
console.log(myName);

myName = 'Manu';
console.log(myName);

// Arrow Functions

function printMyName(name) {
  console.log(name);
}

printMyName('Max');

const printMyName2 = name => {
  console.log(name);
}

const printMyNameAndAge = (name, age) => {
  console.log(name, age);
}

printMyNameAndAge('Max', 28);

const multiply = number => number * 2;

console.log(multiply(2));