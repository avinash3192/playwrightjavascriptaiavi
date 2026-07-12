// //if else statement
// let myCetPct = 999;
// if(myCetPct<1000){
//     console.log("No Seat");
// }
// else{
//     console.log("Allot seat");
// }

// let givenNumber = 20;

// if (givenNumber%2===0)
// console.log("Number is even");
// else
//     console.log("Number is odd");

// //ternary operator
// (givenNumber%2===0) ? console.log("Number is even") : console.log("Number is odd");


// let marksScored = 70;

// //using if-else statement
// if (marksScored>70)
// console.log("Distinction");
// else if (marksScored<=70)
//     console.log("Not a Distinction");

// //ternary operator
// (marksScored>70) ? console.log("Distinction") : console.log("Not a Distinction");


// //vote
// let age = 18;
// if (age>=18)
// console.log("Eligible to vote");
// else 
// console.log("Not Eligible to vote");

//two conditions validation

let age = 15
let drivLic = true;

//if-else statement
if(age>=18 && drivLic===true)
    console.log("Person is eligible to drive");
else 
    console.log("Person is not eligible to drive");

//another way - ternry operator

(age>=18 && drivLic===true) ? console.log("Person is eligible to drive") : console.log("Person is not eligible to drive");

//OR operator

let ageLimit = age>=18 || drivLic===true;
console.log(ageLimit);

//which of the three numbers is the largest using the if...else if...else statement.
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