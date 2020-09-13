function simple_Math() { //Function performing many operations
    var num = 25 * 8 + (4 - 5) / 3;
    num--;
    num++;
    num %= 3;
    document.getElementById("Math").innerHTML = num;
}

function pi_calc() { //Function for finding PI
    document.getElementById("Math2").innerHTML = Math.PI;
}
 function random_num() { //Function for generating random number between 0 and 1
    document.getElementById("Math3").innerHTML = Math.random();
 }


