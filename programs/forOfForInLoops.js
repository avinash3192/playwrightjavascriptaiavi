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
let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}


// Example 3: If you need both index and value
let fruits = ["Apple", "Banana", "Orange"];

for (let [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}

// for...of	Values	✅ Arrays, Strings, Sets, Maps (Recommended)
// for...in	Keys/Indexes	✅ Objects, ⚠️ Avoid for arrays
// for	Index	When you need full control or index manipulation

//for...in → Keys/Indexes (mainly for objects; can be used with arrays and strings when you specifically need indexes).
// for...of → Values (recommended for arrays, strings, Sets, Maps, and other iterable objects).

//Example: for...in with a string
let str = "Hello";

for (let index in str) {
    console.log(index, str[index]);
}

//Use for...in if you need the index:
let str = "Java";

for (let i in str) {
    console.log(`Index: ${i}, Character: ${str[i]}`);
}

//Use for...of if you only need the characters:
let str = "Java";

for (let ch of str) {
    console.log(ch);
}