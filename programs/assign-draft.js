






//Function with parameters and returns a value
function conLetString(inptString){
    let countString = 0;
for (let ch of inptString.toLowerCase()){
    if(ch>='a' && ch<='z'&& !"aeiou".includes(ch)){
        countString++;
    }
}
return countString;
}

let  constLetCount = conLetString("India");
console.log(`Function with parameters and returns a value: Number of consonant  in a given string is ${constLetCount}`);



//Method 3: Using Nested Loops (Without includes()) & for....of loops
let inpArray = [1,2,3,4,5,6,7,8,9,0,1,2,4,5,6]
let finalArray = [];
console.log(`Input Array is ${inpArray}`);
for(let ch of inpArray){
    let isDuplicate = false;
    for (let cj of finalArray){
        if(ch===cj){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        finalArray.push(ch)
    }
}
console.log(finalArray);

