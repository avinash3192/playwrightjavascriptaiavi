//control flow statements or condition statements
let age = 60;

if (age>=60){
    console.log("old age");

}
else if (age>=18){
    console.log("Adult");
}
else {
    console.log("children");
}

//nested-if statements
let loggedIn = true;
let userName = 'Adimin';

if (loggedIn){
    if (userName==='Adimin'){
        console.log("logged in");
    }
    else {console.log("AccessDenied")}
}
else {
   {console.log("Not loggd in")}  
}


let day = 8;
switch(day){
    case 1: console.log("Monday");
    break;
    case 8: console.log("Tue");
    break;
    case 0: console.log("Sund");
    break;
    default: console.log("Invalid day");
}

//grouping Multiple cases using switch case
let browser = "chrome";
switch(browser){
    case "Avi": console.log("don't allow");
    break;
    case "chrome":
    case "Fire": 
    console.log("Allow");
    break;
    default: console.log("Invalid");
}

//Pattern matching with ranges & resolving block scoping pitfalls in switch statements
const score = 85;
switch(true){
    case (score>=90):{
        const a = 'A';
        console.log(a);
        break;
    }
          case (score>=70):{
            const b = 'B';
        console.log(b);
        break;  
        }
        default: console.log("c");
}


switch (5>3){
    case true: console.log("True");
    break;
    case false: console.log("false");
    break;
    default: console.log("N/A");
}

//loops
let sum = 0;
for(let i=0;i<=10;i++){
    if(i%2!==0){
    sum+=i;
    }
}
console.log(sum);

let lang = "Javascript";
for(let i=0;i<lang.length;i++){
    console.log(lang[i]);
    console.log(lang.charAt(i));
}

//nested for loops 
for(let x=1;x<=3;x++){
    for (let y=1;y<=3;y++){
        console.log("Row",x,"col",y);
    }
}

for(let g=1;g<=5;g++){
    if(g===3){
        break;
    }
    console.log(g);
}


for(let g=1;g<=5;g++){
    if(g===3) continue;
    console.log(g);
}

//Multiple Counters in single loop
for (let o=1,p=10;o<=10 && p>=1; o++,p--){
    //  if(o===5 || p===6 ) continue;
    console.log(o , p);
}

for(let i=1;i<=5;i++){
        let strn = "";
    for(let j=1;j<=i;j++){
        strn+='*';
    }
    console.log(strn);
}
for(let i=5;i>=1;i--){
        let strn = "";
    for(let j=1;j<=i;j++){
        strn+='*';
    }
    console.log(strn);
}

for(let i=1;i<=5;i++){
        let strn = "";
    for(let j=1;j<=i;j++){
        strn+=j;
    }
    console.log(strn);
}

for(let i=4;i>=1;i--){
        let strn = "";
    for(let j=1;j<=i;j++){
        strn+=j;
    }
    console.log(strn);
}



let counter =1;
while(counter<=5){
    console.log(counter);
    counter++;
}


let cont = 5;
do{
console.log(cont);
cont--}
while(cont>=1);

