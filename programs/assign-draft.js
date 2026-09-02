// define a class
class Cat {
    //static means sound belongs to the class itself, not to objects created from the class.
    static sound = 'meow';
    constructor(name) {
        this.name = name;
    }
}

// Cat (class)
//  └── sound = 'meow'       ← static property

// myCat (object)
//  └── name = 'King'        ← instance property
let myCat = new Cat('King');
console.log(myCat.name);
console.log(Cat.sound);

//This is a JavaScript object named myDetails
//myDetails is a constant reference to an object. You cannot reassign the entire object. But you can modify its properties:
const myDetails = {
    name: 'Avinash',
    age: 20,
    job: 'tester'
}
//Accessing the properties
console.log(myDetails.name);
//You can modify its properties:
myDetails.name = 'Vishruth';
console.log(myDetails.name);
console.log(myDetails);
//You can also use bracket notation:
console.log(myDetails['name']); // Vishruth
console.log(myDetails['age']);  // 20
console.log(myDetails['job']);  // tester


//constructor & methods
class CatBreed {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`bark() method: My cat name is ${this.name} says meow & the breed is ${this.breed}`);
    }
    // You cannot declare a variable using let directly inside a JavaScript class body like this:
    //let bark1 = function() {}
    bark1 = function(){
        console.log(`bark1() method: My cat name is ${this.name} says meow & the breed is ${this.breed}`);
        return 'bark1() method';
    }

    bark2 = ()=>{
        console.log(`bark2() method: My cat name is ${this.name} says meow & the breed is ${this.breed}`);
    }
}
//When you create the object:JavaScript calls the constructor:
// Here:
// name receives 'King'
// this.name creates an instance property called name
// Therefore, myCat.name is 'King'
const myCatBreed = new CatBreed('Sky', 'Persian');
myCatBreed.bark();
console.log(myCatBreed.bark1());
myCatBreed.bark2();


//multiple objects
class Car{
    static stunt = 'drifts';
    constructor(brand){
        this.brand = brand;
    }

}

const myCar = new Car('BMW');
const myCar1 = new Car('BMW');
console.log(myCar.brand);
console.log(myCar1.brand);
console.log(Car.stunt);

//JavaScript Object Methods, JavaScript Nested Objects

const doggie = {
    name: "Rayne",
    breed: "Husky",
    details: {
        height: "18 inches",
        weight: "30 pounds"
    }
};

console.log(doggie.details.height);
console.log(doggie.details['weight']);
console.log(doggie);


// Object.create() function in JavaScript - used to create a new object by setting an existing object as its prototype. 
const perDetails = {
    name: 'Avi',
    age: 120
}
//Object.create(perDetails) creates a new object 'obj' whose prototype is 'perDetails'.
const obj = Object.create(perDetails);
//adds a new property directly to obj.
//class is an own property of obj, while name and age are inherited through the prototype.
obj.class = '10th';
//adds a new property directly to perDetails.
perDetails.class = '11th';

console.log(perDetails.class); //11th
console.log(obj.name); //Avi
console.log(obj.class); //10th
console.log(perDetails);
console.log(obj);

//Constructor with default values - JavaScript constructor function with default parameters.
//A constructor with default values allows you to specify default values for properties if no values are provided during object creation. 
// This helps in ensuring that the object always has valid properties, even if some arguments are missing.
//Person()          → Constructor function
function Person(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Pranjal", 30);
const person2 = new Person("Amar");
//You provide nothing, so both defaults are used
// name = "Unknown"
// age  = 0
const person3 = new Person();  

console.log(person1);  
console.log(person2); 
console.log(person3);