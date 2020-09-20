//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use it to determine win conditions.
let selectedSquares = [];

//Function for placing X or O in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already
    //The .some() method is used to check each element of selectedSquare array to
    //see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is.
        if (activePlayer === 'X') {
            //If active player is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("Images/real_x.png")';
        //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        }
        else {
            //If active player equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("Images/real_o.png")';
        }
        //squareNumber and activePlayer and concatenated together
        //and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is X, change to O
            activePlayer = 'O';
        }
        //If active player is anyone other than X, change to X
        else {
            activePlayer = 'X';
        }

        //Function that plays placement sound
        audio('Media/newplace.wav');
        //This checks to see if it is the computers turn
        if (activePlayer === 'O') {
            //This function disables clicking for computer choice
            disableClick();
            //This function waits 1 second before placing image
            //and enabling click again
            setTimeout(function(){ computersTurn();}, 1000);
        }
        //Returing true is needed for our computersTurn() function
        //to work
        return true
    }
    //This function results in a random square being selected
    function computersTurn() {
        //This boolean is needed for our while loop
        let success = false;
        //This variable stores a random number
        let pickASquare;
        //This condition allows our while loop to keep trying if
        //a square is selected already
        while (!success) {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluates returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the function
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop
                success = true;
            }
        }
    }
}
//This function parses the selectedSquares array to search for win conditions
//drawWinLine function is called to draw line if condition is met
function checkWinConditions() {
    // The following code check for each possible win condition
    //for X and O, for each square 0,1,2,3,4,5,6,7,8
    if (arrayIncludes('OX', '1X', '2X')) { drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520);}
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520);}
    //This condition checks for a tie. If none of the above conditions
    //register and 9 squares are selected, the code executes
    else if (selectedSquares.length >= 9) {
        //this function plays tie game sound
        audio('Media/newtie.wav');
        //This function set .4 second time before resetGame is called
        setTimeout(function() { resetGame();}, 1000);
    }
    //This function check if an array includes 3 strings.
    //It is used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //The next 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array
        //true is returned and our else if condition 
        //executes the drawWinLine function
        if (a === true && b === true && c === true) {return true;}
    }
}
//This function makes body element temporarily unclickable
function disableClick() {
    //This makes our body unclickable
    body.style.pointerEvents = 'none';
    //This makes body clickable again after 1 sec
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000)
}
//This takes a string parameter of path you set earlier for
//placement sound
function audio(audioURL) {
    //We want to create new audio object and pass path as parameter.
    let audio = new Audio(audioURL);
    //Play method plays audio sound
    audio.play();
}
//Draw win lines with html canvas
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses canvas
    const canvas = document.getElementById("win-lines");
    //This line gives us access to methods and properties to use on canvas
    const c = canvas.getContext("2d");
    //This line is where the start of the line x axis is
    let x1 = coordX1,
    //This line is where the line y axis starts
    y1 = coordY1,
    //This line is the end of the x axis
    x2 = coordX2,
    //This is the end of the line y axis
    y2 = coordY2,
    //This variable stores temporary x axis data we update in animation loop
    x = x1,
    //This variable stores temporary y axis data we update in animation loop
    y = y1;
//This function interacts with canvas
function animateLineDrawing() {
    //Variable creates the loop for when the game ends it restarts.
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //This method clears contects from last loop interation
    c.clearRect(0, 0, 608, 608);
    //This method starts a new path
    c.beginPath();
    //Moves to a starting point for line
    c.moveTo(x1, y1);
    //Indicated endpoint for line
    c.lineTo(x, y);
    //Setting width of line
    c.lineWidth = 10;
    //This method set color of line
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    //This draw out everything we laid out above
    c.stroke();
    //This condition checks if we reached the endpoint
    if (x1 <= x2 && y1 <= y2) {
        //This condition add 10 to previous end x point
        if (x < x2) { x += 10;}
        //This condition add 10 to previous end y point
        if (y < y2) { y += 10;}
        //This condition cancels animation loop if it reaches endpoints
        if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
    }
    //This is necessary for the 6, 4, 2 win condition
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10;}
        if (y > y2) { y -= 10;}
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
    }
}
//This function clears canvas after line is drawn
function clear() {
    //This line starts animation loop
    const animationLoop = requestAnimationFrame(clear);
    //This line clears canvas
    c.clearRect(0, 0, 608, 608);
    //This line stops animation loop
    cancelAnimationFrame(animationLoop);
}
//This line disallows clicking while win sound is playing
disableClick();
//This line plays win sound
audio('Media/realwin.wav');
//This line calls main animation loop
animateLineDrawing();
//This line wait 1 sec, then clears canvas, resets game, and allows clicking again
setTimeout(function () {clear(); resetGame();}, 1000);
}
//This function resets the game in a tie or win
function resetGame(){
    //This for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //This variable get the html element of i
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage
        square.style.backgroundImage = "";
    }
    //This resets our array so it is empty and we can start over
    selectedSquares = [];
}