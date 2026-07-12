function largeOfThreeNum(){
    let a = 2000;
let b = 200;
let c = 500;
    if (a >= b && a >= c) {
    console.log("a is largest number");
}
else if (b >= a && b >= c) {
    console.log("b is largest number");
}
else {
    console.log("c is largest number");
}
}

largeOfThreeNum();
// console.log(largeOfThreeNum()); - undefined



//push even & odd numbers to an array
function oddEvenArrays(){
let arr = [1,2,4,5,6,7,8,9,12,13,56,67,89,45];
let evenNumb = [];
let oddNumb = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evenNumb.push(arr[i]);
    }
    else{
        oddNumb.push(arr[i]);
    }
}
console.log(evenNumb);
console.log(oddNumb);
}

oddEvenArrays();