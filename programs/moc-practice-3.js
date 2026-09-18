let arrayNum = [1,2,3,4,5,5,65,6,6]
for(let arr of arrayNum){
    console.log(arr);
}

//For a string, it iterates over each character:
let str = "hello";

for (let ch of str) {
  console.log(ch);
}

let fruits = ["Apple", "Banana", "Orange"];

for (let index in fruits) {
    console.log(index);          // 0, 1, 2
    console.log(fruits[index]);  // Apple, Banana, Orange
}

//Use for...in if you need the index:
let str1 = "Java";

for (let i in str1) {
    console.log(`Index: ${i}, Character: ${str1[i]}`);
}

//Arrray methods

fruits.push("Melon" , "Kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Mango");
console.log(fruits);
console.log(fruits.includes("Banana"));
console.log(fruits.indexOf('Banana'));
console.log(fruits.sort());
console.log(fruits.push("Apple","Musk"));
console.log(fruits);
let sliced = fruits.slice(1,3);
console.log(sliced);
console.log(fruits.splice(2,1,"Avacado"));
console.log(fruits);
console.log(fruits.splice(2,2));
console.log(fruits);
console.log(fruits.length);

//String methods
let str5 = " Hello, World! ";
console.log(str5.length);
console.log(str5.toUpperCase());
console.log(str5.toLowerCase());
console.log(str5.trim());
console.log(str5.includes('Hello'));
console.log(str5.indexOf('W'));
console.log(str5.indexOf('Hello'));
let str6 = str5.slice(1,3)
console.log(str6);
console.log(str5.replace("World","Universe"));

//split(''): Breaks the string into an array of individual characters: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"].
// sort(): Sorts the characters in place based on their UTF-16 code unit values. In this character encoding, punctuation comes first (space   then comma ,), followed by uppercase letters (H, W), and finally lowercase letters (d, e, l, o, r).
// join(): Joins the sorted array elements back into a single string. Because no separator argument was passed, it defaults to using a comma (,) between each character. This results in the consecutive commas  , , at the start of the output string (the first comma is the separator after the space character, and the second comma is the actual sorted comma character).
let str9 = "Hello, World" ;
console.log(str9.split('').sort().join(''));

console.log(str5.charAt(4));

let str10 = "Avinash";
let str11 = "Vishruth";
console.log(str10.concat(str11));