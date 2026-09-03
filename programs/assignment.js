//Program 1 :WAP to print if given candidate is scored distinction or not 

// const console = require("node:console");

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

///Program 8: WAP to solve fizz buzz logic until 50
for(let i =1;i<=50;i++){


    if(i%3===0 && i%5===0){
        console.log("Number", i, "is Fizz-Buzz");
    }
    else if (i%3===0){
        console.log(`Number ${i} is Fizz`);
    }
    else if(i%5===0){
        console.log("Number " + i + " is Buzz");
    }
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


//Program 10 - WAP to reverse a number
let numbString = '6589';
let revrString = '';
for(let i=numbString.length-1;i>=0;i--){
    revrString+=numbString.charAt(i);
}
console.log(`Reversal of number ${numbString} is ${revrString}`);

//another approach by coverting a number to string again converting string back to number at the end after reversal
let orgNum = 47585;
let orgNumStr = orgNum.toString(); // let orgNumStre = String(orgNumStr); console.log(typeof orgNumStr);
let revString = '';
for(let i=orgNumStr.length-1;i>=0;i--){
    revString+=orgNumStr.charAt(i);
}
console.log(`Reversal of number ${orgNum} is ${Number(revString)}`);

//another approach
let numb = 6589;
let reversed = numb
    .toString()
    .split('')
    .reverse()
    .join('');

console.log(reversed); // "9856"


//Program 12 - WAP to count number of vowels in given string
let vowelString = "My name is avinash";
let lowVowelString = vowelString.toLowerCase();
let count = 0;
console.log(`Given string in lowercase is: "${lowVowelString}"`);
console.log(lowVowelString.length);
for(let i = 0;i<lowVowelString.length;i++){
// console.log(lowVowelString.charAt(i));
let ch = lowVowelString.charAt(i);
if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u'){
count++;
}
}
console.log(`Number of vowels in a given string: "${vowelString}" is ${count}`);

//Instead of using charAt(), you can use bracket notation, which is more common in modern JavaScript
let vowelString = "My name is avinash";
let lowVowelString = vowelString.toLowerCase();
let count = 0;
console.log(`Given string in lowercase is: "${lowVowelString}"`);
console.log(lowVowelString.length);
for(let i = 0;i<lowVowelString.length;i++){
// console.log(lowVowelString[i]);
let ch = lowVowelString[i];
if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u'){
count++;
}
}
console.log(`Number of vowels in a given string: "${vowelString}" is ${count}`);

//An even cleaner approach using includes()
let vowelString1 = "My name is avinash";
let counter = 0;
for(ch of vowelString1.toLowerCase()){
   if("aeiou".includes(ch)) //checks whether the character stored in ch is present in the string "aeiou"
    {
counter++;
   }
}
console.log(`Number of vowels in a given string: "${vowelString1}" is ${count}`);

//another example
let str = "Apple";

for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) {
        console.log(`${ch} is a vowel`);
    } else {
        console.log(`${ch} is not a vowel`);
    }
}

//Program 13 - WAP to reverse a string and check if it is palindrome
let originalString = "EyE";
let inputString = originalString.toLowerCase();
let reverseString = '';
for(let i=inputString.length-1;i>=0;i--){
   reverseString+=inputString[i];
}
console.log(`Reversed String: ${reverseString}`);
if(inputString===reverseString)
   console.log(`Given string: "${originalString}" is a Palindrome`);
else 
   console.log(`Given string: "${originalString}" is not a Palindrome`);


//Program 14 : find max and min number in a given array
let givenArray = [9,10,8,6,7,5,2,3,0,1,11];
let max=givenArray[0];
let min =givenArray[0];
console.log(max);
console.log(min);
if (givenArray.length>0){
    console.log(`Proceed to find max and min number in a given array`);
for(let i=1;i<givenArray.length;i++){
    console.log(givenArray[i]);
    if(givenArray[i]>max){
        max=givenArray[i];
    }
    else if(givenArray[i]<min){
        min = givenArray[i];
    }
}
console.log(`Max number is ${max} & Min number is ${min} in a given array`);
}
else console.log(`Given array is null`);

//Improved version
let givenArray = [9, 10, 8, 6, 7, 5, 2, 3, 0, 1, 11];

if (givenArray.length > 0) {

    let max = givenArray[0];
    let min = givenArray[0];

    console.log(`Initial Max = ${max}`);
    console.log(`Initial Min = ${min}`);

    console.log("Finding maximum and minimum values...");

    for (let i = 1; i < givenArray.length; i++) {
//This works because a number cannot be both greater than the current maximum and less than the current minimum at the same time.
//However, using two independent if statements is a common practice because:
// It makes the logic easier to read.
// It remains correct even if the conditions become more complex in the future.
// It avoids unnecessarily coupling the maximum and minimum checks.

        if (givenArray[i] > max) {
            max = givenArray[i];
        }

        if (givenArray[i] < min) {
            min = givenArray[i];
        }
    }

    console.log(`Maximum number = ${max}`);
    console.log(`Minimum number = ${min}`);

} else {
    console.log("Given array is empty.");
}

//another approach -  find max and min number in a given array
let givenArray = [9, 10, 8, 6, 7, 5, 2, 3, 0, 1, 11];

if (givenArray.length > 0) {
    // Using the spread operator to find max and min
    // The spread operator (...) expands the elements of the array into individual arguments for the Math.max and Math.min functions.
    // This is a concise and efficient way to find the maximum and minimum values in an array without needing to loop through it manually.
    let max = Math.max(...givenArray);
    let min = Math.min(...givenArray);
    console.log(`Maximum number = ${max}`);
    console.log(`Minimum number = ${min}`);
}
else {
    console.log("Given array is empty.");
}



//Program 15 : WAP to find first non occurrence character in a given string
let givenString = "hAvinash";
let inptString = givenString.toLowerCase();
console.log(`Given string in lowercase is: ${inptString}`);
let nonOcurChar = "";
for(let i=0;i<inptString.length;i++){
   console.log(inptString.charAt(i)) ;
   let ch = inptString.charAt(i);
   if(inptString.indexOf(ch)===inptString.lastIndexOf(ch)){
        nonOcurChar=ch;
break;
   }
}
if(nonOcurChar===""){
    console.log(`There is no non-occurence character in a given string: ${givenString}`);
    }
   else{   console.log(`First non-occurring character in a given string is: ${nonOcurChar}`);
}

//WAP to find first occurrence character in a given string
let givenString = "hAvinash";
let inptString = givenString.toLowerCase();
console.log(`Given string in lowercase is: ${inptString}`);
let ocurChar = "";
for(let i=0;i<inptString.length;i++){
   console.log(inptString.charAt(i)) ;
   let ch = inptString.charAt(i);
   if(inptString.indexOf(ch)!==inptString.lastIndexOf(ch)){
        ocurChar=ch;
break;
   }
}
if(ocurChar===""){
    console.log(`There is no occurrence character in a given string: ${givenString}`);
    }
   else{   console.log(`First occurring character in a given string is: ${ocurChar}`);
}

//Program 16 : count number of consonants using functions
//Function Declaration with parameters
function consonantLetters(inptString){
let countString = 0;
for (let ch of inptString.toLowerCase()){
    if(ch>='a' && ch<='z'&& !"aeiou".includes(ch)){
        countString++;
    }
}
console.log(`Function Declaration: Number of consonant  in a given string: "${inptString}" is ${countString}`);
}

consonantLetters("Virat's jersey number is 18!!");

//Function Expression with parameters
const consLet = function(inptString){
    let countString = 0;
for (let ch of inptString.toLowerCase()){
    if(ch>='a' && ch<='z'&& !"aeiou".includes(ch)){
        countString++;
    }
}
console.log(`Function Expression: Number of consonant  in a given string: "${inptString}" is ${countString}`);
}

consLet("Mango");


//Arrow Function with parameters
const conLetrs = (inptString) =>{
        let countString = 0;
for (let ch of inptString.toLowerCase()){
    if(ch>='a' && ch<='z'&& !"aeiou".includes(ch)){
        countString++;
    }
}
console.log(`Arrow Function: Number of consonant  in a given string: "${inptString}" is ${countString}`);
}

conLetrs("banana & Pineapple");

//Function with parameters and returns a value
function conLetString(inptString){
    let countString = 0;
for (let ch of inptString.toLowerCase()){
    if(ch>='a' && ch<='z'&& !"aeiou".includes(ch)){
        countString++;
    }
}
return countString;
}

let  constLetCount = conLetString("India");
console.log(`Function with parameters and returns a value: Number of consonant  in a given string is ${constLetCount}`);


//Program 17 : remove duplicates from array
//Method 1:Using Using a for......of loop
let givenArray1 = [1,2,3,4,5,6,7,1,2,3,4,5,6,7,8,9,0];
let uniqueArray1 = [];
console.log(`Original array is ${givenArray1}`);
for (let ch of givenArray1){
    if (!(uniqueArray1.includes(ch)))
    {
        uniqueArray1.push(ch);
    }
}

console.log(`Unique values from original array is ${uniqueArray1}`);


//Method 2: Using a for loop
// Logic
// Create an empty array uniqueArray.
// Traverse the original array.
// Check whether the current element already exists in uniqueArray.
// If not present, add it.
// After the loop, uniqueArray contains only unique elements.
let orgArray1 = [1,2,3,4,5,6,7,3,2,4,6,7,6];
console.log(`Original array is ${orgArray}`);
let finalArray2 = [];
for(let i=0;i<orgArray1.length;i++){
    if(!(finalArray2.includes(orgArray1[i]))){
        finalArray2.push(orgArray1[i]);
    }
}
console.log(`Unique values from original array is ${finalArray2}`);

// Method 3: Using Nested Loops (Without includes())

// Logic
// Create an empty array named uniqueArray to store unique elements.
// Traverse each element of the original array using the outer for loop.
// Assume the current element is not a duplicate by setting isDuplicate = false.
// Use the inner for loop to compare the current element with every element already present in uniqueArray.
// If a match is found:
// Set isDuplicate = true.
// Exit the inner loop using break.
// After checking all elements:
// If isDuplicate is still false, add the current element to uniqueArray.
// Repeat the process until all elements are processed.
// Finally, print uniqueArray, which contains only unique values.
// Dry Run

// Input Array

// [1, 2, 3, 2, 4, 5, 3, 6, 1]
// Iteration	CurrentElement(arr[i])	uniqueArray(Before)	Duplicate?	uniqueArray(After)
// 1	1	[]	No	[1]
// 2	2	[1]	No	[1, 2]
// 3	3	[1, 2]	No	[1, 2, 3]
// 4	2	[1, 2, 3]	Yes	[1, 2, 3]
// 5	4	[1, 2, 3]	No	[1, 2, 3, 4]
// 6	5	[1, 2, 3, 4]	No	[1, 2, 3, 4, 5]
// 7	3	[1, 2, 3, 4, 5]	Yes	[1, 2, 3, 4, 5]
// 8	6	[1, 2, 3, 4, 5]	No	[1, 2, 3, 4, 5, 6]
// 9	1	[1, 2, 3, 4, 5, 6]	Yes	[1, 2, 3, 4, 5, 6]

// if (condition) {
//     // Executes only when condition is true
// }
// If the condition is false, JavaScript completely skips everything inside the braces {}.
// isDuplicate = false → !false = true → element is added
// isDuplicate = true → !true = false → element is not added

// if (false) {
//     uniqueArray.push(arr[i]);
// }
// Since the condition is false, the code inside the if block is skipped.

let arr = [1, 2, 3, 2, 4, 5, 3, 6, 1];
let uniqueArray = [];

for (let i = 0; i < arr.length; i++) {

    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        uniqueArray.push(arr[i]);
    }
}

console.log(uniqueArray);


//Method 3: Using Nested Loops (Without includes()) & for....of loops
let inpArray = [1,2,3,4,5,6,7,8,9,0,1,2,4,5,6]
let finalArray = [];
console.log(`Input Array is ${inpArray}`);
for(let ch of inpArray){
    let isDuplicate = false;
    for (let cj of finalArray){
        if(ch===cj){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        finalArray.push(ch)
    }
}
console.log(finalArray);


//Program 19 - find second largest element in an array …
const numbers = [10, 5, 20, 8, 15,20,10]
//-Infinity is a JavaScript special value that means negative infinity.
let largest = -Infinity;
let secondLargest = -Infinity;
// let largest = 0;
// let secondLargest = 0;
for(let num of numbers){
if(num>largest)
    {
        secondLargest=largest;
        largest=num;

    }
    else if (num>secondLargest && num!==largest)
        {
            secondLargest = num;
        }
}
console.log(`largest number = ${largest}`);
console.log(`second largest number = ${secondLargest}`);

//Program 19 - find second smallest element in an array …
const numbers = [10, 5, 20, 8, 15,20,10,1,2]
//Infinity is a JavaScript special value that means positive infinity.
let smallest = Infinity;
let secondSmallest = Infinity;
for(let num=0;num<numbers.length;num++){
if(numbers[num]<smallest)
    {
        secondSmallest=smallest;
        smallest=numbers[num];

    }
    else if (numbers[num]<secondSmallest && numbers[num]!==smallest)
        {
            secondSmallest = numbers[num];
        }
}
console.log(`smallest number = ${smallest}`);
console.log(`second smallest number = ${secondSmallest}`);

//Program 20 - check if given two word is anagram
let word1 = 'listen ';
let word2 = ' silent';
let sortedWord1 = word1.trim().toLowerCase().split('').sort().join('');
let sortedWord2= word2.trim().toLowerCase().split('').sort().join('');
console.log(`sortedWord1: ${sortedWord1}`);
console.log(`sortedWord2: ${sortedWord2}`);
if(word1.length === word2.length){
    console.log(`word1 lenghth is: ${word1.toLowerCase().length}`);
    console.log(`word1 lenghth is: ${word2.toLowerCase().length}`);
    console.log(`Length check is pass`);
    if(sortedWord1===sortedWord2){
        console.log(`Given Two words are anagrams`);
    }
    else{
        console.log(`sorted lists doesn't match.Hence given two words are not anagrams `);;
    }
}else{
    console.log(`Words length don't match. Hence not eligible for anagrams`);
}


//Using Functions
function anagrams() {
    let word1 = 'listen ';
let word2 = ' silent';
let sortedWord1 = word1.trim().toLowerCase().split('').sort().join('');
let sortedWord2= word2.trim().toLowerCase().split('').sort().join('');
console.log(`sortedWord1: ${sortedWord1}`);
console.log(`sortedWord2: ${sortedWord2}`);
if(word1.length === word2.length){
    console.log(`word1 lenghth is: ${word1.toLowerCase().length}`);
    console.log(`word1 lenghth is: ${word2.toLowerCase().length}`);
    console.log(`Length check is pass`);
    if(sortedWord1===sortedWord2){
        console.log(`Given Two words are anagrams`);
    }
    else{
        console.log(`sorted lists doesn't match.Hence given two words are not anagrams `);;
    }
}else{
    console.log(`Words length don't match. Hence not eligible for anagrams`);
}


}

anagrams();

//Using class, methods & constructors
//Wrap the logic inside a dedicated class method (e.g., check()) and use this to reference the class properties.
class Anagrams {
    constructor(word1, word2) {
        // Fix: Clean the strings right away during assignment
        this.word1 = word1.trim().toLowerCase();
        this.word2 = word2.trim().toLowerCase();
    }

    // Fix: Move all logic into a class method
    check() {
        let sortedWord1 = this.word1.split('').sort().join('');
        let sortedWord2 = this.word2.split('').sort().join('');

        console.log(`sortedWord1: ${sortedWord1}`);
        console.log(`sortedWord2: ${sortedWord2}`);

        // Fix: Use 'this.' to access class properties
        if (this.word1.length === this.word2.length) {
            console.log(`word1 length is: ${this.word1.length}`);
            console.log(`word2 length is: ${this.word2.length}`);
            console.log(`Length check passed`);

            if (sortedWord1 === sortedWord2) {
                console.log(`Given two words are anagrams`);
                return true;
            } else {
                console.log(`Sorted lists don't match. Hence given two words are not anagrams`);
                return false;
            }
        } else {
            console.log(`Word lengths don't match. Hence not eligible for anagrams`);
            return false;
        }
    }
}

// How to use it:
const checker = new Anagrams('SIlENTe', 'listene');
checker.check(); 


//Using Function expression
class Anagrams {
    constructor(word1,word2) {
        this.word1 = word1;
        this.word2 = word2;
    }
    anagramCheck = function(){
        let sortedWord1 = this.word1.trim().toLowerCase().split('').sort().join('');
        let sortedWord2 = this.word2.trim().toLowerCase().split('').sort().join('');
        console.log(`sortedWord1: ${sortedWord1}`);
        console.log(`sortedWord2: ${sortedWord2}`);
        if (this.word1.trim().length === this.word2.trim().length) {
            console.log(`word1 length is: ${this.word1.trim().length}`);
            console.log(`word2 length is: ${this.word2.trim().length}`);
            console.log(`Length check passed`);
            if (sortedWord1 === sortedWord2) {
                console.log(`Given two words are anagrams`);
            } else {
                console.log(`Sorted lists don't match. Hence, given two words are not anagrams`);
            }
        } else {
            console.log(`Words lengths don't match. Hence, not eligible for anagrams`);
        }
    }
}

let anagCheck = new Anagrams('listen ',' silent');


//Using Arrow functions & return type

class Anagrams {
    constructor(word1,word2) {
        this.word1 = word1;
        this.word2 = word2;
    }
    anagramCheck = ()=>{
        let sortedWord1 = this.word1.trim().toLowerCase().split('').sort().join('');
        let sortedWord2 = this.word2.trim().toLowerCase().split('').sort().join('');
        console.log(`sortedWord1: ${sortedWord1}`);
        console.log(`sortedWord2: ${sortedWord2}`);
        if (this.word1.trim().length === this.word2.trim().length) {
            console.log(`word1 length is: ${this.word1.trim().length}`);
            console.log(`word2 length is: ${this.word2.trim().length}`);
            console.log(`Length check passed`);
            if (sortedWord1 === sortedWord2) {
                console.log(`Given two words are anagrams`);
                return "Given two words are anagrams";
            } else {
                console.log(`Sorted lists don't match. Hence, given two words are not anagrams`);
                return "Given two words are not anagrams";
            }
        } else {
            console.log(`Words lengths don't match. Hence, not eligible for anagrams`);
            return "Given two words are not anagrams";
        }
    }
}

let anagCheck = new Anagrams('listen ',' silent');
console.log(`From Method call:${anagCheck.anagramCheck()}`);

//Program 21: WAP to find occurrence of first non repeating character in an array
let givenArray = ['A','B','C','i','j','k','b','c','a','I','j','K','A','B'];
let nonOccChar = "";

console.log(`Given Array is: ${givenArray}`);

for(let arr of givenArray){
    if(givenArray.indexOf(arr) === givenArray.lastIndexOf(arr)){
        nonOccChar = arr;
        break; // Stops immediately at the first unique character ('C')
    }
}

if(nonOccChar === ""){
    console.log(`There is no unique character in the given array.`);
} else {   
    console.log(`First non-repeating character in the given array is: ${nonOccChar}`);
}


//WAP to find occurrence of first repeating character in an array
let givenArray = ['A','B','C','i','j','k','b','c','a','I','j','K','C'];
let nonOccChar = "";

console.log(`Given Array is: ${givenArray}`);

for(let arr of givenArray){
    if(givenArray.indexOf(arr) == givenArray.lastIndexOf(arr)){
        nonOccChar = arr;
        break; // Stops immediately at the first unique character ('C')
    }
}

if(nonOccChar === ""){
    console.log(`There is no repeating character in the given array.`);
} else {   
    console.log(`First repeating character in the given array is: ${nonOccChar}`);
}
