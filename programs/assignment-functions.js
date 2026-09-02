//Program 1 :WAP to print if given candidate is scored distinction or not 
function distinction(marksScored){
    const marksRange = 70;
    if(marksScored>marksRange){
            console.log(`Distinction`);
            return true;
        }
    else if(marksScored<=marksRange){
console.log(`Not Distinction`);
return false;
}
}

console.log(distinction(69));
const result = distinction(69);
console.log(`candiate distincion status is ${result}`);



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

//or
function factorialIterative1(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialIterative1(5)); // 120