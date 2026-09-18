//Object.create() function in JavaScript
const obj={
    name:'Pranjal',
    age:21
}
const obj1=Object.create(obj)
obj1.class='10th'
console.log(obj1.name);
console.log(obj1.class);
console.log(obj);
console.log(obj1);