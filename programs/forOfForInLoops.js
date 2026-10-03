// for (let ch of str) is valid for strings, and the same for...of syntax can be used for arrays as well.

//For an array, it iterates over the values/elements:
let arr = [10, 20, 30];

for (let ch of arr) {
  console.log(ch);
}

//For a string, it iterates over each character:
let str = "hello";

for (let ch of str) {
  console.log(ch);
}

//Use for...of when you want the values. If you need the index, use for...in or arr.entries():
//Example 1: for...in with an array
let fruits = ["Apple", "Banana", "Orange"];

for (let index in fruits) {
    console.log(index);          // 0, 1, 2
    console.log(fruits[index]);  // Apple, Banana, Orange
}


//Example 2: for...of (Recommended)
let fruits1 = ["Apple", "Banana", "Orange"];

for (let fruit of fruits1) {
    console.log(fruit);
}


// Example 3: If you need both index and value
let fruits2 = ["Apple", "Banana", "Orange"];

for (let [index, fruit] of fruits2.entries()) {
    console.log(index, fruit);
}

// for...of	Values	✅ Arrays, Strings, Sets, Maps (Recommended)
// for...in	Keys/Indexes	✅ Objects, ⚠️ Avoid for arrays
// for	Index	When you need full control or index manipulation

//for...in → Keys/Indexes (mainly for objects; can be used with arrays and strings when you specifically need indexes).
// for...of → Values (recommended for arrays, strings, Sets, Maps, and other iterable objects).

//Example: for...in with a string
let str3 = "Hello";

for (let index in str3) {
    console.log(index, str3[index]);
}

//Use for...in if you need the index:
let str2 = "Java";

for (let i in str2) {
    console.log(`Index: ${i}, Character: ${str2[i]}`);
}

//Use for...of if you only need the characters:
let str1 = "Java";

for (let ch of str1) {
    console.log(ch);
}



let obj2 = {
    name1: 'Avinash',
    job: 'test',
    Age: 32
}

for(let aj in obj2){
    console.log(aj, obj2[aj]);
}

//error - not iterable
// let obj3 = {
//     name1: 'Avinash',
//     job: 'test',
//     Age: 32
// }


// for(let aj1 of obj3){
//     console.log(aj1);
// }


// for...of is used for iterable values like arrays and strings. A plain object {} is not iterable.

// You have:

let array = {
  a: 'Avi',
  b: 'Rao',
  c: 'King'
};

for (let ch of array) {
  console.log(ch);
}

// This gives:

// TypeError: array is not iterable
// If you want the values

// Use Object.values():

for (let ch of Object.values(array)) {
  console.log(ch);
}

// Output:

// Avi
// Rao
// King
// If you want the keys

// Use Object.keys():

for (let ch of Object.keys(array)) {
  console.log(ch);
}

// Output:

// a
// b
// c
// If you want both key and value

// Use Object.entries():

for (let [key, value] of Object.entries(array)) {
  console.log(key, value);
}

// Output:

// a Avi
// b Rao
// c King
// Important interview point
// Syntax	Works with object?	Purpose
// for...of object	❌	Object isn't iterable
// for...of Object.keys(object)	✅	Get keys
// for...of Object.values(object)	✅	Get values
// for...of Object.entries(object)	✅	Get key + value
// for...in object	✅	Iterate keys