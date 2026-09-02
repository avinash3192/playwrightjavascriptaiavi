//Program 18 - WAP to implement factorial of number by making using of function and which can be reused for finding factorial

function factorialNumb(n){
let res = 1;
for(let i=2;i<=n;i++){
    res*=i;
}
console.log(`Inside Function: Factorial of number ${n} is ${res}`);
return res;
}

console.log(`Outside Function: Factorial of number is ${factorialNumb(6)}`);
//or
// const factorialRes = factorialNumb(5);
// console.log(factorialRes);

