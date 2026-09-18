let aa = 1000;
console.log(aa);
{
     a=10;
    console.log(a);
}
// console.log(a);

var b = 20
 console.log(b);
 var b=30;
  console.log(b);
{
    b=10;
    console.log(b);
}
console.log(b);


const c = "Namma QA";
// const c="Avi";
{
  const c="Avi";
}
console.log(c);

let myScore = 100;
let friendScore = myScore; // Copying the value
friendScore = 90; // Friend's score changes
console.log(myScore); // Still 100! (They are independent)


let a1='Helo';
let a2 = 10;
let a3;
let a4=null;
let a5=2544352647376757748n;
console.log(a5);
let a6= BigInt(123453254367);
console.log(a6);

let id = Symbol("Phone");


const ph = Symbol("Phnumber");
let student = {
    name: 'Avi',
    job: "test",
    [ph]: 9036
}
console.log(student.name);
console.log(student[ph]);

let studentCopy = student;
studentCopy.name = "Chaitra";
console.log(student.name);


//pass by value

let count = 10;

function passCount(val){
    val=20;
    console.log(val);
    let upVal = val;
    console.log(upVal);
}
passCount(count);
console.log(count);

//pass by reference
let user= {
    name: 'Avi'
}

function renameUser(obj){
obj.name="Avish";
}
console.log(user.name);
renameUser(user);
console.log(user.name);


let car = {
    brand: "Tesla"
}

function renameCar(obj) {
obj = {
    brand: "Honda"
}
}
console.log(car.brand);
renameCar(car);
console.log(car.brand);

let name,age, job; //undefined
let name1 = null;

let arr = [1,2,3,4,5];
console.log(arr);

let ph12 = Symbol("Phoneeee");
let arObj = {
    [ph12]: 12345
}
console.log(arObj[ph12]);


//arithemetic operators
let ao = 150;
let bo = 100;
console.log(ao+bo);
console.log(ao-bo);
console.log(ao/bo);
console.log(ao%bo);
console.log(ao*bo);
console.log(2**3);

console.log(ao++);
console.log(ao);
console.log(ao--);
console.log(ao);
console.log(++ao);
console.log(--ao);
console.log(typeof a);
console.log(typeof(b));

//concatenate
let f_name = "AVINASH";
let l_name = "Rao";

console.log(f_name + l_name);

//Assignment operatos
let f=5;
f+=10;
console.log(f);
f-=10;
console.log(f);
f*=4;
console.log(f);
f/=5;
console.log(f);
f%=2;
console.log(f);

//relational or comparison operators
let p = 200;
let q = '200';
let r = "500";


console.log(p==q);//compares only the values
console.log(p!=q);
console.log(p>q);
console.log(p<q);
console.log(p<=q);
console.log(p>=q);
console.log(p===q); //compares the values & datatypes
console.log(null===null);
console.log(undefined===undefined);
console.log(NaN===NaN);

let obj1 = {name1:'Avi'};
let obj2= {name2:'Avi'};
console.log(obj1===obj2);
console.log(obj1!==obj2);

//logical operators returns true or false, combines conditional & relational 
console.log("logical operator");
let l=100;
let m = 200;
console.log(l>50 && m>100);
console.log(l<50 && m<100);
console.log(l<50 || m>100);

console.log(l+m);
console.log("way 2: " + l + " way 5: " + m , l+m);
console.log("way 3:",l+m);

console.log(false && false); //false
console.log(true || false); //true

let agei;
let age2 = null;
let age3 = 55;

console.log(agei ?? age3);
console.log(age2 ?? age3);
console.log(age3 ?? age2);
console.log(age3 ?? 18);
console.log(7 ?? age3);

//conditional or ternanry operator
let ai = 87;
ai>50 ? console.log("true") : console.log('false');

console.log(!(ai>100));
console.log(!true);
console.log(!false);

///bitwise operator
//& , | , ^ , ~ , << , >> , >>>>
console.log(15 & 9);
console.log(15 | 9);
console.log(15 ^ 9);
console.log(15 << 9);
console.log(15 >> 9);

//grouping operator
let v = 5;
let u = 7;
let w = 6;
console.log(v+u*w);
console.log((v+u)*w);

class Animal {}

const dog = new Animal();
console.log(dog instanceof Animal);
console.log(dog instanceof Object);