function add(a, b) {
    console.log(a + b);
    return a + b;
}

console.log(add(5, 6));
let res = add(51, 6);
console.log(res);

function greeetUser(name) {
    return "Hello, " + name + "!";
}

console.log(greeetUser("Avinash"));

const squre = function (num) {
    return num * num;
}
console.log(squre(2));

//Arrow functions
const cube = (num) => {
    return num * num * num;
}

console.log(cube(2));




const quad = (num) => {
    return num * num * num * num;
}

console.log(quad(2));

//hositing
//Traditional Function Declaration - If you use a traditional function declaration instead of an arrow function assigned to a const variable, 
// the function is fully hoisted (both declaration and value), and the original code structure will work:
console.log(quad1(5)); // Outputs: 125

function quad1(num) {
    return num * num * num * num;
}



//callback operator
function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}

function quotient(a, b) {
    return a / b;
}

function caluclator(a, b, operation) {
    return operation(a, b);
}

let result = caluclator(30, 20, quotient)
console.log(result);


function calc(a, b = 0) { //default value of b set to 0
    return (2 * (a + b));
}

const resVar = calc(2);
console.log(resVar);  //4


function restRes(x, y, ...rest) {
    console.log(x, y, rest)
}

restRes(1, 2, 3, 4, 54, 5, 6, 6);

//returning inner function
function out() {
    console.log("out");
    return function inn()
    {
        console.log("inn");
        return "Hello Inn";
    }
}

console.log(out());
let inResult = out();
console.log(inResult);
console.log(inResult());


//calling inner function in outer function
function outer() {
    console.log("outer");
 function inner()
    {
        console.log("inner");
    }
    inner();
}

outer();


//Callback function

function bark(cry){
    console.log("bark");
    cry();

}

bark(function(){
    console.log("cry");
    });

    const cry1 = function(){
        console.log("cry1");
    }
    bark(cry1);

    //another way
function foo(func){
    console.log("foo");
    if(true){
        func();
    }
            return "foo & buzz";
}


const buzz = function(){
    console.log("buzz");
}

console.log(foo(buzz));

//Pure function
//Pure function
let greetingMsg = "Hello";
function greet(name){
    return greetingMsg + name;
}
console.log(greet("Avinash"));


//Arrow Functions
let arrowFunc = ()=>{
    console.log("Hello Arrow");
}

arrowFunc();


//another way
let happyFunc = () => console.log("Happy");

happyFunc();

//another way without return statement
let sadFunc = (sadMsg) => "Hello" + sadMsg

console.log(sadFunc(",I am Sorry"));

let sadFunc1 = (sadMsg) =>{return "Hello" + sadMsg} 
console.log(sadFunc1(",I am Sorry"));


let addi = x => x+x;

console.log(addi(2));


//IIFE - Using arrow function

(() => {
    console.log("Arrow - Immediately Invoked Function Expression");
}) ();

//with parameter
(function (count){
    console.log("IIFE:" , count);
}) (1);


//Call stack or function execution task
function first() {
  second();
  console.log("First done");
}

function second() {
  console.log("Second done");
}

first();

//another example
function f1(){
    console.log("Execute F1 function");
}
function f2(){
    f1();
    console.log("Execute F2 function");
}
function f3(){
    f2();
    console.log("Execute F3 function");
}

f3();