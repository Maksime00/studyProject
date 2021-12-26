"use strict"

const num = 5;

if (num === 4) {
    console.log("Error");
} else if (num === 3) {
    console.log("Eror2");
} else {
    console.log("error3");
}


(num === 5) ? console.log("Oui") : console.log("Non"); //Тернарый оператор 

const numOne = 100;

switch (numOne) {
    case 50: 
        console.log("Nice");
            break;
    case 40: 
        console.log("VeryNice");
            break;
    case 30: 
        console.log("NoProblem");
            break;
    default:
        console.log("Sorry");
            break;
}
