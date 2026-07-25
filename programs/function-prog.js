function largeOfThreeNum(){
    let a = 2000;
let b = 200;
let c = 500;
    if (a >= b && a >= c) {
    console.log("a is largest number");
}
else if (b >= a && b >= c) {
    console.log("b is largest number");
}
else {
    console.log("c is largest number");
}
}

largeOfThreeNum();
// console.log(largeOfThreeNum()); - undefined



//push even & odd numbers to an array
function oddEvenArrays(){
let arr = [1,2,4,5,6,7,8,9,12,13,56,67,89,45];
let evenNumb = [];
let oddNumb = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evenNumb.push(arr[i]);
    }
    else{
        oddNumb.push(arr[i]);
    }
}
console.log(evenNumb);
console.log(oddNumb);
}

oddEvenArrays();


//Arrow fuction
const sqr = (num) => {
console.log(num*num);
return num*num;
}

console.log(sqr(2));


//arrow function with implicit return
const cube = (num) => num*num*num;

console.log(cube(2));


//arrow function with implicit return
const subtra1 = (x,y) => x - y; // This is an arrow function with implicit return, it will return the difference of x and y to the caller
console.log(subtra1(30, 20)); // Output: 10 (because the subtra1 function returns the difference of x and y)

//return & print string
const greet = () => "Hello World";

console.log(greet());



// //callback function example




function avi(callback){

setTimeout ( ()=> {const data = "You are my wife" ;
callback(data)},2000);

}


function chai(dataPrint){
console.log(dataPrint);
}


avi(chai);

function printMemo(){
    console.log("Hi Avinash !")
}

setTimeout(printMemo, 3000);



