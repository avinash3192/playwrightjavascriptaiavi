// let marks = [10,20,30,40];
// console.log(typeof marks);
// console.log(typeof (marks));

// console.log(marks[0]);
// console.log(marks.length);

// for(let i=0;i<=marks.length-1;i++){
//     console.log(marks[i]);
// }

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

// marks.push(70,90);
// console.log(marks.length);
// console.log(marks);

// marks.pop();
// console.log(marks);

// marks.unshift(100);
// console.log(marks);


// let fruits = ['Apple', 'banana', 'orange', 'grapes'];

// console.log(fruits);
// console.log(typeof(fruits));

// fruits.sort();

// console.log("************************");

// console.log(fruits);

// fruits.sort().reverse();
// console.log(fruits);

// let alpha = [
//   'B', 'A', 'D', 'C', 'F', 'G', 'G',
//   'H', 'J', 'I', 'K', 'M', 'L', 'N',
//   'O', 'P', 'Q', 'R', 'S', 'T', 'U',
//   'W', 'V', 'Y', 'X', 'Z'
// ];
// console.log("Original Array:");
// console.log(alpha);


// console.log("Ascending Order:");
// alpha.sort();
// console.log(alpha);


// console.log("Descending Order:");
// alpha.reverse();
// console.log(alpha);


// //65 is the ASCII/Unicode value of 'A'
// // 90 is the ASCII/Unicode value of 'Z'
// // String.fromCharCode() converts the number to its corresponding character.
// //Instead of typing all letters manually, you can generate A to Z using a loop:

// let alpha1 = [];

// for (let i = 65; i <= 90; i++) {
//     alpha1.push(String.fromCharCode(i));
// }   

// console.log(alpha1);

// alpha1.reverse();
// console.log(alpha1);


// //push even & odd numbers to an array
// let arr = [1,2,4,5,6,7,8,9,12,13,56,67,89,45];
// let evenNumb = [];
// let oddNumb = [];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         evenNumb.push(arr[i]);
//     }
//     else{
//         oddNumb.push(arr[i]);
//     }
// }
// console.log(evenNumb);
// console.log(oddNumb);

// console.log(arr.indexOf(2));
// // console.log(arr.charAt(6)); this works only on strings
// console.log(arr.includes(13));

// let charArray = ['A','B','C'];

// let charArray1 = ['A comes efore B'];
// console.log(charArray1.includes('A'));


//practice
let frts = ["apple", "banana", "orange" , "watermelon"];
frts.push("mango","kiwi");
console.log(frts);

frts.pop();
console.log(frts);

frts.shift();
console.log(frts);


frts.unshift("pineapple");
console.log(frts);

console.log(frts.includes("banana"));

console.log(frts.indexOf("banana"));

console.log(frts.lastIndexOf("watermelon"));


let alp = ["a", "b", "c" , "d" , "a","z"];
console.log(alp.indexOf("c"));

console.log(alp.lastIndexOf("a"));


console.log(alp.sort());

console.log(alp.slice(1,3));

console.log(alp);

alp.splice(3,1,"e","f");
console.log(alp);
