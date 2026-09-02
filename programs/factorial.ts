function factorialIterative1(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialIterative1(5));  // 120


// function distinction(marksScored: number,marksLimit: number ){
//     if(marksScored>marksLimit)
//         console.log(`Distinction`);
//     else if(marksScored<=marksLimit)
// console.log(`Not Distinction`);
// }

// distinction(71,70);