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


