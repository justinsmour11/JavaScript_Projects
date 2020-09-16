var num = 75; //Global vs local variables
function test_1() {
    var num2 = 89;
}

function test_2() {
    document.write(num2);
}
console.log(test_2());

function myDate() {  //My own if statement
    if (new Date().getHours() > 20) {
    document.getElementById("toDate").innerHTML = "You're late!";
    }
}

function myHeight() { //  If/else statement 
    if (document.getElementById("height").value > 48) {
        document.getElementById("height_permission").innerHTML = "You can ride!";
    }
    else {
        document.getElementById("height_permission").innerHTML = "Sorry! You aren't tall enough! Yet..."
    }
}

function Time_function() { // If, else if, else time function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon!";
    }
    else {
        Reply = "It is the eeevvvveniinnngg!"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}