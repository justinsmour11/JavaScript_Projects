document.write(typeof 4.9 + "<br>"); //Typeof operator - finding data type

document.write(isNaN('String') + "<br>"); //Is not a number function
document.write(isNaN(56) + "<br>");

function infin() { //function returing infinity
    document.getElementById("infinity").innerHTML = 4E312;
}

function neg_infin() { //function returing negative infinity
    document.getElementById("neg_infinity").innerHTML = -5E450;
}

document.write((7 < 9) + "<br>"); //Displaying simple boolean logic
document.write(56 >= 89);

console.log(100 - 46); //Printing math in the console

document.write("<br>" + ("29" + 15)); //Combining string and a number

console.log(4 > 90); //Printing boolean value in console

document.write("<br>" + (10 == 10)); //Using the 'equals' operator
document.write("<br>" + (73 == 33));

document.write("<br>" + (73 === 73)); //Comparing both value and data type
document.write("<br>" + (73 === "pizza"));
document.write("<br>" + (73 === "73"));
document.write("<br>" + (73 === 33));

document.write("<br>" + (10 > 1 && 9 < 80)); //Boolean logic with AND
document.write("<br>" + (10 > 1 && 9 > 80));
document.write("<br>" + (10 > 1 || 9 > 80)); //Boolean logic with OR
document.write("<br>" + (10 < 1 || 9 > 80));

document.write("<br>" + !(1 > 2)); //Boolean logic with NOT
document.write("<br>" + !(1 < 38));