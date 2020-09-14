function myDictionary() { //Defining function
    var ape = {   //Setting KVP
        species : "human",
        speed : "slow",
        intelligence : "high",
        exo : "no"
    };
    delete ape.speed //Deleting an entry
    document.getElementById("Dictionary").innerHTML = ape.speed; //Posting item to HTML doc
}