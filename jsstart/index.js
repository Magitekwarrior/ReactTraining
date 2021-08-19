/// ARROW FUNCTION
// ***********************
// const printMyName = (name) => {
//   console.log(name)
// }
// printMyName('TEST');

/// JS CLASSES
// ***********************

class Human{
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor(){
    super();
    this.name = 'ATZ';
    this.gender ='attack helicopter';
  }

  printMyName(){
    console.log(this.name)
  }  
}

const person = new Person();
person.printMyName();
person.printGender();


