let student = " you guys as doing great in learning JS ";
console.log("Length of student string:", student.length);
console.log("Uppercase:", student.toUpperCase());
console.log("Lowercase:", student.toLowerCase());
console.log("Character at index 5:", student.charAt(5));
console.log("Index of 'great':", student.indexOf("great"));
console.log("Last index of 'g':", student.lastIndexOf("g"));
console.log("Slice (0, 10):", student.slice(0, 10));
console.log("Replace 'JS' with 'JavaScript':", student.replace("JS", "JavaScript"));
console.log("Split by space:", student.split(" "));
console.log("Split by 'g':", student.split("g"));
console.log("Includes 'great':", student.includes("great"));
console.log("Starts with 'you':", student.startsWith("you"));
console.log("Ends with 'JS':", student.endsWith("JS"));
console.log("Trimmed:", student.trim());
console.log("Trimmed from start:", student.trimStart());
console.log("Trimmed from end:", student.trimEnd());
console.log("Concatenated:", student.concat(" and you will become a JS expert"));
console.log("Repeated 2 times:", student.repeat(2));
console.log("Padded at start:", student.padStart(50, "*"));
console.log("Padded at end:", student.padEnd(50, "*"));
console.log("Substring (0, 10):", student.substring(0, 10));
console.log("Substr (0, 10):", student.substr(0, 10));
console.log("CharCodeAt (0):", student.charCodeAt(0));

let fin = student.split(" ");
console.log(fin);
for (let i = 0; i < fin.length; i++) {
    console.log(fin[i]);
}


let orgString = "You guys are doing great in learning JS";
let newString = "";
console.log("Length of orgString:", orgString.length);

for (let i = 0; i < orgString.length; i++) {
    console.log(orgString.charAt(i));
}

for(let i=orgString.length-1;i>=0;i--){
    // console.log(orgString.charAt(i));
    newString += orgString.charAt(i);

}
console.log("Reversed string:", newString);
console.log("original string:", orgString);