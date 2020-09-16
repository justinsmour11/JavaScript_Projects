function myConcate() { //Concatenate strings
    var str1 = "I ", str2 = "am a ", str3 = "man";
    var myGender = str1.concat(str2, str3);
    document.getElementById("concateDemo").innerHTML = myGender;
}

function sliceMethod() { //Slice method
    sentence = "Who said it was mine??";
    sect_1 = sentence.slice(9, 20);
    document.getElementById("slice_1").innerHTML = sect_1;
}

var lowerOne = "here is all upper case letters"; //Make uppercase
console.log(lowerOne.toUpperCase());

var whereIsIt = "I know it has to be somewhere..."; //Search
console.log(whereIsIt.search("it"));

var numToString = 4975; //Convert number to string
console.log(numToString.toString());

var longNum = 6738608.56937586; //Specify length
console.log(longNum.toPrecision(8));

var decimalOne = 12.63473; //Round to specified decimal
console.log(decimalOne.toFixed(3));

var valueOfStr = "Have you seen my shoes anywhere?"; //Return primitive value of string
console.log(valueOfStr.valueOf());