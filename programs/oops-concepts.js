// Creating a class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

// Creating an object
const student1 = new Student("Rahul", 20);

// Calling method
student1.displayInfo();


// define a class
class Dog {
    // class property
    static sound = "bark";
    
    constructor(name) {
        // instance property
        this.name = name;
    }
}


class Dog {
    constructor(name, breed) {
      
        // instance property  
        this.name = name;   
        this.breed = breed; 
    }

    // defining method
    bark() {
        console.log(`${this.name} says woof!`);
    }
}

// creating an object (instance)
const myDog = new Dog("Rayne", "Husky");
myDog.bark();


class Dog {
    // Static (class) property
    static sound = "bark"; 
    
    // Instance property
    constructor(name) {
        this.name = name; 
    }
}

// Create objects
let dog1 = new Dog("Rayne");
let dog2 = new Dog("Buddy");

console.log(dog1.name);
console.log(dog2.name);
console.log(Dog.sound);


//JavaScript Nested Objects

const Dog = {
    breed: 'Husky',
    color: 'Gray & White',
    details: {
        height: '18 inches',
        weight: '30 pounds'
    }
};

//Using dot Notation
console.log(Dog.breed);         
console.log(Dog.details.height);    
//Using bracket Notation
console.log(Dog["color"]);          
console.log(Dog.details["weight"]);


//Object.create() function in JavaScript
const obj={
    name:'Pranjal',
    age:21
}
const obj1=Object.create(obj)
obj1.class='10th'
console.log(obj1.name)

//Constructor with default values
class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("Pranjal", 30);
const person2 = new Person("Amar");  
const person3 = new Person();  

console.log(person1);  
console.log(person2); 
console.log(person3);


//Class Getters and Setters
class Dog {
  constructor(name) {
    this.name = name;
  }

  // Getter method
  get dogName() {
    return this.name;
  }

  // Setter method
  set dogName(newName) {
    this.name = newName;
  }

  // Regular method
  bark() {
    console.log(`${this.name} says woof!`);
  }
}

// creating an object
let myDog = new Dog('Rayne');
console.log(myDog.name);

myDog.dogName = 'Buddy';
console.log(myDog.name);

myDog.bark();