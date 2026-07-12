//Program 1 :WAP to print if given candidate is scored distinction or not 

let marksScored = 71;

//using if-else statement
if (marksScored>70)
console.log("Distinction");
else if (marksScored<=70)
    console.log("Not a Distinction")

//Program 2 : WAP to check if a given candidate is eligible to vote in elections
let age = 18;
if (age>=18)
console.log("Eligible to vote");
else
console.log("Not Eligible to vote");

//Program 3 : WAP to print all even number from 1 to 100 
let k = 1;
while(k<=100){
    if(k%2===0)
    console.log(k);
    k++;
}


//Program 4 : WAP to find sum of numbers from 1 to 20 using while loop
let i=1;
let sum = 0;
while(i<=20)
    {
sum+=i;
i++;
    }
console.log(sum);

//Program 5 : WAP to print multiplication of 4 .
let multiplier = 4;
let product = 0;
for(let i=1;i<=10;i++){
product = multiplier * i;
console.log(multiplier + ' * ' + i + ' = ' + product);
}

//while loop
let j = 1;
while(j <= 10) {
    product = multiplier * j;
    console.log(multiplier + ' * ' + j + ' = ' + product);
    j++;
}

//Program 6 : WAP to find factorial of a number
//decreament approach
let numbSix = 6;
let factRes = 1;
for(let i=numbSix;i>=1;i--){
factRes*=i;
}
console.log(`Factorial of number ${numbSix} is ${factRes}`);

//while loop approach
let numbFour = 4;
let factResult = 1;
let m = numbFour;
while(m >= 1) {
    factResult *= m;
    m--;
}
console.log(`Factorial of number ${numbFour} is ${factResult}`);

//increament approach
let numbFiv = 5;
let factReslt = 1;
for(let i=1;i<=numbFiv;i++){
factReslt*=i;
}
console.log(`Factorial of number ${numbFiv} is ${factReslt}`);

//while loop approach
let numbThree = 3;
let factResul = 1;
let n = 1;
while(n <= numbThree) {
    factResul *= n;
    n++;
}
console.log(`Factorial of number ${numbThree} is ${factResul}`);

//Program 7 : WAP to print number which is divisible by both 3 and 5 from 1 to 100
for(let i=1;i<=100;i++){
    if(i%3===0 && i%5===0)
        console.log(`Number ${i} is divisible by both 3 and 5`);
}


//while loop approach
let p = 1;
while(p <= 100) {
    if(p%3===0 && p%5===0)
        console.log(`Number ${p} is divisible by both 3 and 5`);
    p++;
}   



// Program 9 : WAP to sort an string array in alpabhetic order a-z and z-a

let alpha = [
  'B', 'Z', 'D', 'C', 'F', 'G', 'E',
  'H', 'J', 'I', 'K', 'M', 'L', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'W', 'V', 'Y', 'X', 'A'
];
console.log("Original Array:");
console.log(alpha);


console.log("Ascending Order:");
alpha.sort();
console.log(alpha);


console.log("Descending Order:");
alpha.reverse();
console.log(alpha);

//another approach to sort an string array in alpabhetic order a-z and z-a
//65 is the ASCII/Unicode value of 'A'
// 90 is the ASCII/Unicode value of 'Z'
// String.fromCharCode() converts the number to its corresponding character.
//String.fromCharCode() is a built-in JavaScript method that converts one or more Unicode (ASCII) values into their corresponding characters.
//Instead of typing all letters manually, you can generate A to Z using a loop:
//String.fromCharCode(code)
//code → A number representing the Unicode (ASCII) value of a character.
//Returns the corresponding character as a string.
//console.log(String.fromCharCode(65));
let alphabet = [];
for(let i =65;i<=90;i++){
alphabet.push(String.fromCharCode(i));
}
console.log("Ascending Order:");
console.log(alphabet);


console.log("Descending Order:");
alphabet.reverse();
console.log(alphabet);

//string array of fruits
let fruits = [ 'Apple','Banana','Orange','Grapes','Mango','Pineapple','Watermelon','Papaya','Guava','Kiwi']
console.log("Ascending Order:");
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log("Descending Order:");
console.log(fruits);

