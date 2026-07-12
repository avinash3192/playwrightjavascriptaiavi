// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//If the loop condition uses a variable, that variable usually needs to be updated inside the loop; otherwise, the condition may never change.
// let j = 1;  
// while(j<=10){
//     console.log("I am inside while loop");
//     j++;
// }

// console.log("I am outside while loop"); 


//even numbers
// let k = 1;
// while(k<=100){
//     if(k%2===0)
//     console.log(k);
//     k++;
// }

// for(let l=1;l<=100;l++){
//     if(l%2===0)
//     console.log(l);
// }

// //odd numbers
// for(let m=1;m<=100;m++){
//     if(m%2!==0)
//     console.log(m);
// }


// //do-while loop
// let test = 11;
// do{
//     console.log("I am inside do while loop");
//     test++;
// }

// while(test<=10);


// let password = "admin";
// let userInput = "admin";
// while(userInput!==password){
//     console.log("Incorrect password");
// }


// let i=1;
// let sum = 0;
// while(i<=20)
//     {
//  sum+=i;
// i++;
//     }
// console.log(sum);


// let x = 10;
// let y = 3;
// let res = x+y;
// console.log(res);


//fibnocci series
// 1,3,5,7...........
// let n1 = 0, n2 = 1, n3;
// for(let i=1;i<=5;i++){
//     n3 = n1+n2;
//     n1=n2;
//     n2=n3;
//     console.log(n3);
// }

//0+1 = 1
//1+1=2
//1+2=3
//2+3=5

//multiplication table
// let multiplier = 4;
// let product = 0;
// for(let i=1;i<=10;i++){
// product = multiplier * i;
// console.log(multiplier + ' * ' + i + ' = ' + product);
// }

//another way to print multiplication table
// let multiplier2 = 6;
// for(let i=1;i<=10;i++){
//     // console.log(multiplier2 + ' * ' + i + ' = ' + (multiplier2*i));
//     console.log(`Multiplication table: ${multiplier2} * ${i} = ${multiplier2*i}`);
// }

//another way to print multiplication table
// let multiplier3 = 7;
// for(let i=1;i<=10;i++){
//     console.log(`Multiplication table: ${multiplier3} * ${i} = ${multiplier3*i}`);
// }

//different ways to print
// console.log(`${"Avinash"}`);
// console.log(`${"Avinash"} is a good boy`);

//factorial of a number
//decreament approach
// let numbSix = 6;
// let factRes = 1;
// for(let i=numbSix;i>=1;i--){
// factRes*=i;
// }
// console.log(`Factorial of number ${numbSix} is ${factRes}`);

//increament approach
// let numbFiv = 5;
// let factReslt = 1;
// for(let i=1;i<=numbFiv;i++){
// factReslt*=i;
// }
// console.log(`Factorial of number ${numbFiv} is ${factReslt}`);




//Program 7 : WAP to print number which is divisible by both 3 and 5 from 1 to 100
// for(let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0)
//         console.log(`Number ${i} is divisible by both 3 and 5`);
// }

//for loop
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//fizz-Buzz
// for(let i =3;i<=50;i++){

//     if(i%3===0 && i%5===0){
//         console.log("Number", i, "is Fizz-Buzz");
//     }
//     else if (i%3===0){
//         console.log(`Number ${i} is Fizz`);
//     }
//     else if(i%5===0){
//         console.log("Number " + i + " is Buzz");
//     }
// }






//swappig numbers with using third variable
let r = 10;
let s = 20;
console.log(`Before swapping r=${r} and s=${s}`);
let t = r;
r=s;
s=t;
console.log(`After swapping r=${r} and s=${s}`);


//swap numbers without third variable
let p = 50;
let q = 60;
console.log(`Before swapping p=${p} and q=${q}`);
p=p+q; //10+20 = 30
q=p-q; //30-20 = 10
p=p-q; //30-10 = 20
console.log(`After swapping p=${p} and q=${q}`);

//fibnocci series
// 1,3,5,7...........
// let n1 = 0, n2 = 1, n3;
//     console.log(n1);
//     console.log(n2);
// for(let i=1;i<=5;i++){
//     n3 = n1+n2;
//     n1=n2;
//     n2=n3;
//     console.log(n3);
// }

//fibnocci series


//0,1,2,3,5...........
let u=0,v=1,c;
let count = 10
let w=1;
console.log(u);
console.log(v);
while(w<=count){
c=u+v;
console.log(c);
u=v;
v=c;
w++;
}


