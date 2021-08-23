/// ARROW FUNCTION
// ***********************
// const printMyName = (name) => {
//   console.log(name)
// }
// printMyName('TEST');

/// JS CLASSES
// ***********************

class Human{
    gender = 'male';

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = 'ATZ';
  gender ='NEW helicopter';

  printMyName = () => {
    console.log(this.name)
  }  
}

const person = new Person();
person.printMyName();
person.printGender();

// ********************************************************************
// SPREAD OPERATORS

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]

console.log('numbers:', numbers);
console.log('newNumbers:',  newNumbers);

const personObj = {
  name: 'Max'
};

const newPersonObj = {
  ... personObj,
  age: 28
}

console.log('Person:', personObj);
console.log('newPerson:', newPersonObj);

// ********************************************************************
// REST OPERATORS

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log('filter rest operator', filter(1, 2, 3));

// Declare the variable with const or let or var  
 
const {name} = {name:'Max', age:28};
console.log('name', name); // It will print Max 

const {age} = {name:'Max', age:28};
console.log('age', age); 

// ********************************************************************
// Destructuring

const nums = [1, 2, 3];
const [num1, num2] = nums;

console.log(num1, num2);