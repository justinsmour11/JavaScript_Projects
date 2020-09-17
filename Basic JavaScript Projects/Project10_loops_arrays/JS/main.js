function Call_Loop() { //While loop
    days_until_Oct = ""
    var X = 13;
    while (X > 0) {
        days_until_Oct += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = days_until_Oct;
}

function strLength() { //String length function
    str_leng = document.getElementById("length").innerHTML;
    document.getElementById("length_answer").innerHTML = str_leng.length;
}

function for_Loop() { //For loop
    var Instru = ["Bass", "Drums", "Guitar", "Keyboard"]
    var instrList = "";
    var x;
    for (x = 0; x < Instru.length; x++) {
        instrList += Instru[x] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = instrList;
}

function array_Function() { //Function utilizing an Array
    The_Beatles_Top_Hits = [];
    The_Beatles_Top_Hits[0] = "Yesterday";
    The_Beatles_Top_Hits[1] = "Help!";
    The_Beatles_Top_Hits[2] = "Come Together";
    The_Beatles_Top_Hits[3] = "Something";
    document.getElementById("Array").innerHTML = "Here is a famous song by The Beatles: " + The_Beatles_Top_Hits[3];
}


function constant_function() { //Constant function
    const my_Guitar = {brand:"Gibson", style:"SG", color:"Red", price:"$1000"};
    my_Guitar.style = "Les Paul";
    my_Guitar.weight = "10lbs";
    document.getElementById("Constant").innerHTML = "My " + my_Guitar.style +
    " weighs " + my_Guitar.weight;
}

var X = "global"; //Global and local variables
function global_var() {
    let X = "local";
    document.write("<br>" + X);
}
document.getElementById("global").innerHTML = "<br>" + X;

function multiplyThree(x, y, z) { //Return statement
    return x * y * z;
}
document.getElementById("product").innerHTML = "<br>" + multiplyThree(2, 3, 7);

let vehicle = { //Properties and method using let
    make: "Volkswagen",
    model: "Jetta",
    year: "2014",
    fuel: "gasoline",
    description : function() {
        return "I have a " + this.fuel + "-powered " + this.year + " " + this.make + " " + this.model + ".";
    }
};
document.getElementById("carDescrip").innerHTML = vehicle.description();

var text = ""; //Break statment
var i; 
for (i = 5; i > 1; i--) {
    if (i == 3) {break;}
    text += "You have " + i + " seconds left!" + "<br>";
}
document.getElementById("break").innerHTML = text;

var cont_text = ""; //Continue statement
for (i = 5; i > 1; i--) {
    if (i == 3) {continue;}
    cont_text += "You have " + i + " seconds left!" + "<br>";
}
document.getElementById("continue").innerHTML = cont_text;