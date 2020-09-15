function vote_function() { //Ternary operators
    Age = document.getElementById("vote_age").value;
    Permission = (Age < 18) ? "You can't vote yet.":"You can vote!";
    document.getElementById("vote_permission").innerHTML = Permission;
}

function Vehicle(Make, Model, Year, Color) { //Constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model  = Model;
    this.Vehicle_Year = Year;
    this.Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");   //Displaying Constructor function in HTML document
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Color + "-colored " + 
    Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


function Guitar(Make, Model, Pickups, Color) {
    this.make = Make;
    this.model = Model;
    this.pickups = Pickups;
    this.color = Color;
}

var old_Justin = new Guitar("Gibson", "SG", "P90s", "Red"); 
var new_Justin = new Guitar("Ibanez", "250z", "HSH", "White");
function myGuitar() {
    document.getElementById("six_string").innerHTML = "Justin started with a " + 
    old_Justin.color + " " + old_Justin.make + " " + old_Justin.model + " with " + old_Justin.pickups +
    " and since then, he got a " + new_Justin.color + " " + new_Justin.make + " " + new_Justin.model + 
    " with " + new_Justin.pickups + ".";
}

function myNest() { //Nested function
    document.getElementById("Nested_Function").innerHTML = innerNest();
    function innerNest() {
        var str1 = "This is ";
        var str2 = "a nested function!";
        str1 += str2;
        return str1;
    }
}