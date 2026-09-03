let givenArray = ['A','B','C','i','j','k','b','c','a','I','j','K','C'];
let nonOccChar = "";

console.log(`Given Array is: ${givenArray}`);

for(let arr of givenArray){
    if(givenArray.indexOf(arr) == givenArray.lastIndexOf(arr)){
        nonOccChar = arr;
        break; // Stops immediately at the first unique character ('C')
    }
}

if(nonOccChar === ""){
    console.log(`There is no repeating character in the given array.`);
} else {   
    console.log(`First repeating character in the given array is: ${nonOccChar}`);
}
