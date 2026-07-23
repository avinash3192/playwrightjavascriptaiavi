






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
