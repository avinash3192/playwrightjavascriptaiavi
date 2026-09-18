// //Program 1 :WAP to print if given candidate is scored distinction or not 

// let marksScored = 70;

// if(marksScored>70){
//     console.log(`Distinction`);
// }
// else
// {
//     console.log(`Not Distinction`);
// }

// (marksScored>70) ? console.log(`Distinction`) : console.log(`Not Distinction`);

// //Program 2 : WAP to check if a given candidate is eligible to vote in elections
// let age = 25;
// (age>18) ? console.log(`Eligible to vote`) : console.log(`Not eligible to vote`);

// //Program 3 : WAP to print all even number from 1 to 100 

// let k=1;
// while(k<=20){
// if(k%2===0)
//     console.log(k);
//     k++;
// }

// //odd
// for(let k=1;k<=20;k++){
//     if(k%2!==0)
//         console.log(k);
// }

// //Program 4 : WAP to find sum of numbers from 1 to 20 using while loop
// let l=1;
// let sum = 0;
// while(l<=20){
// sum+=l;
// l++;
// }
// console.log(`sum is: ${sum}`);

// //Program 5 : WAP to print multiplication of 4 .
// let multipler = 4;
// let product = 0;
// for(let i=1;i<=10;i++){
// product = multipler * i;
// console.log(`${multipler} * ${i} = ${product}`);
// }

// //while
// let k=1;
// while(k<=10){
//     product = multipler * k;
//     console.log(`${multipler} * ${k} = ${product}`);
//     k++;
// }

//Program 6 : WAP to find factorial of a number
//increament
// let n = 5;
// let res = 1;
// for(let i=1;i<=n;i++){
// res*=i;
// }
// console.log(res);

// //decreament - while loop
// let g=5;
// let reslt = 1;
// while(g>=1){
//     reslt *=g;
//     g--;
// }
// console.log(reslt);

// //for loop
// let num = 6
// let reslt1 = 1;
// for(let i=num;i>=1;i--){
//     reslt1*=i;
// }
// console.log(reslt1);

//Program 7 : WAP to print number which is divisible by both 3 and 5 from 1 to 100
// for(let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0)
//         console.log(i);
// }

// //while
// let o = 1;
// while(o<=100){
//         if(o%3===0 && o%5===0)
//         console.log(o);
//     o++;
// }

///Program 8: WAP to solve fizz buzz logic until 50
// for(let i=1;i<=50;i++){
//     if (i%3===0 && i%5===0){
//         console.log(`${i} is Fizz-Buzz`);
//     }
//     else if (i%3===0){
//         console.log(`${i} is Fizz`);
//     }
//         else if (i%5===0){
//         console.log(`${i} is Buzz`);
//     }
// }

// Program 9 : WAP to sort an string array in alpabhetic order a-z and z-a
// let alpha = [
//   'B', 'Z', 'D', 'C', 'F', 'G', 'E',
//   'H', 'J', 'I', 'K', 'M', 'L', 'N',
//   'O', 'P', 'Q', 'R', 'S', 'T', 'U',
//   'W', 'V', 'Y', 'X', 'A'
// ];

// console.log(alpha.sort());

// console.log(alpha.reverse());

// //using 
// let alphabets = [];
// for(let i=65;i<=90;i++){
// alphabets.push(String.fromCharCode(i));
// }

// console.log(alphabets);

// console.log(alphabets.reverse());

//Program 10 - WAP to reverse a number
// let numberStr = '6589';
// let reverNumStr = '';
// for(let i=numberStr.length-1;i>=0;i--){
//     reverNumStr+=numberStr.charAt(i);
// }
// console.log(reverNumStr);

//another approach
// let number = 724724882890;
// // let numStrg = String(number);
// let numStrg = number.toString();
// let reverString = '';
// for(let i=numStrg.length-1;i>=0;i--){
//     reverString+=numStrg[i];
// }
// console.log(Number(reverString));
// console.log(typeof reverString);

// //another approach

// let num = 13253464
// let reverseNum = num.toString().split('').reverse().join('');
// console.log(reverseNum);


// Program 12 - WAP to count number of vowels in given string
// let VowelStrin = 'My name is avinash'
// let modVowelStrin = VowelStrin.toLowerCase();
// let count = 0;
// for(let i=0;i<modVowelStrin.length;i++){
//     let ch = modVowelStrin[i];
//     if("aeiou".includes(ch)){
//         count++;
//     }
// }
// console.log(count);
// count=0;

// //another approach
// for(let ch of modVowelStrin){
//     if("aeiou".includes(ch))////checks whether the character stored in ch is present in the string "aeiou"
//         {
//         count++;
//     }
// }
// console.log(count);

//Program 13 - WAP to reverse a string and check if it is palindrome
// let originalStrin = 'South';
// let loOriginalStrin = originalStrin.toLowerCase();
// let reverseString = '';
// for(let i=loOriginalStrin.length-1;i>=0;i--){
//     reverseString+=loOriginalStrin[i];
// }

// if(loOriginalStrin===reverseString)
//     console.log("Is a Palindrome");
// else
// console.log('Not Palindrome');

//Program 14 : find max and min number in a given array
// let givenArray = [1,2,3,0,4,5,6,7,8,9,2,4,6]
// let min = givenArray[0];
// let max = givenArray[0];
// for(let arr=1;arr<givenArray.length;arr++){
//     if(givenArray[arr]>max)
//         max=givenArray[arr];
//     if (givenArray[arr]<min)
//         min = givenArray[arr];
// }
// console.log(max);
// console.log(min);

//Program 15 : WAP to find first non occurrence character in a given string
// let charString = 'vinashAh';
// let mocharString = charString.toLowerCase();
// let nonOccur = '';
// for(let i=0;i<mocharString.length;i++){
//     let ch = mocharString[i];
//     console.log(ch);
//     if(mocharString.indexOf(ch)===mocharString.lastIndexOf(ch)){
//         nonOccur = ch;
//         break;
//     }
// }
// if(nonOccur==='')
//     console.log('there is no non occurrence character in a given string');
// else
// console.log(`first non occurrence character in a given string is ${nonOccur}`);


// //occurence
// let occur = ''
// for(let i=0;i<mocharString.length;i++){
//     let ch = mocharString[i];
//     console.log(ch);
//     if(mocharString.indexOf(ch)!==mocharString.lastIndexOf(ch)){
//         occur = ch;
//         break;
//     }
// }
// if(occur==='')
//     console.log('there is no occurrence character in a given string');
// else
// console.log(`first occurrence character in a given string is ${occur}`);


//Program 16 : count number of consonants using functions
// function consonants(inputString){
// let modString = inputString.toLowerCase();
// let count = 0;
// for(let ch of modString){
//     if(ch>='a' && ch<='z' !== "aeiou".includes(ch)){
//     count++;
//     }
// }
// console.log(count);
// return count;
// }


// console.log(consonants("Mango"));

//Program 17 : remove duplicates from array
// let givArr = [1,3,4,6,7,4,2,457,74,6,7,8,8,5,4];
// let resArr = [];
// for(let ch of givArr){
//     if(!resArr.includes(ch)){
//         resArr.push(ch);
//         }
//         }
// console.log(resArr);


// let reqArr = [3,4,5,6,7,8,9,0,3,4,5,3,2,2,3,5]
// let modResArr = [];
// for(let i=0;i<reqArr.length;i++){
//     let isDuplicate = false;
//     for(let j=0;j<modResArr.length;j++){
//         if(reqArr[i]===modResArr[j]){
//             isDuplicate = true;
//             break;
//         }
// }

// if(!isDuplicate){
//     modResArr.push(reqArr[i]);
// }
// }

// console.log(modResArr);

//Program 18 - WAP to implement factorial of number by making using of function and which can be reused for finding factorial
// function factorial(num){
//     let res = 1;
//     for(let i=num;i>=1;i--){
//         res*=i;
//     }
// console.log(res);
// }

// factorial(5);

//Program 19 - find second largest element in an array
// const numbers = [10,50,15,52,20,10];
// let largest = -Infinity;
// let secLargest = -Infinity;
// for(let num of numbers){
//     if(num>largest){
//         secLargest = largest ;
//         largest = num;
//     }
//     else if (num > secLargest && num!==largest){
//         secLargest = num;
//     }
// }
// console.log(largest);
// console.log(secLargest);


// smallest = Infinity;
// secSmallest = Infinity;
// for(let num of numbers){
//     if(num<smallest){
//         secSmallest = smallest ;
//         smallest = num;
//     }
//     else if (num < secSmallest && num!==smallest){
//         secSmallest = num;
//     }
// }
// console.log(smallest);
// console.log(secSmallest);


//Program 20 - check if given two word is anagram
// let word1 = 'silenr';
// let word2 = 'Silent ';
// let sortedWord1 = word1.trim().toLowerCase().split('').sort().join('');
// let sortedWord2 = word2.trim().toLowerCase().split('').sort().join('');
// if(sortedWord1.length === sortedWord2.length){
//     console.log(`Length check is pass`);
// if(sortedWord1===sortedWord2)
// console.log(`Is Anagram`);
// else 
// console.log(`Not Anagram`);
// }
// else 
//     console.log('No eligible');


//Program 21: WAP to find occurrence of first non repeating character in an array
// let givenArrays = ['A','B','C','i','j','k','b','c','a','I','j','K','A','B'];
// let nonOccChar = "";
// for(let arr of givenArrays){
//     if(givenArrays.indexOf(arr)===givenArrays.lastIndexOf(arr)){
//         nonOccChar = arr;
//         break;
//     }
// }

// if(nonOccChar === ""){
//         console.log(`There is no unique character in the given array.`);
// } else {   
//     console.log(`First non-repeating character in the given array is: ${nonOccChar}`);
// }

// let givenArrayss = ['A','B','C','i','j','k','b','c','a','I','j','K','A','B'];
// let OccChar = "";
// for(let arr of givenArrayss){
//     if(givenArrayss.indexOf(arr)!==givenArrayss.lastIndexOf(arr)){
//         OccChar = arr;
//         break;
//     }
// }

// if(OccChar === ""){
//         console.log(`There is no repeating character in the given array.`);
// } else {   
//     console.log(`First repeating character in the given array is: ${OccChar}`);
// }