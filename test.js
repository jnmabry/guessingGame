// Call Global variables for easy updating
var random1 = 0;
var random2 = 0;
var random3 = 0;



// Generate Random Numbers
function randomGenerator() {
    random1 = Math.floor(Math.random() * 9 + 1);
    random2 = Math.floor(Math.random() * 9 + 1);
    random3 = Math.floor(Math.random() * 9 + 1);

    while (random1 == random2 || random1 == random3 || random2 == random3) {
        random1 = Math.floor(Math.random() * 9 + 1);
        random2 = Math.floor(Math.random() * 9 + 1);
        random3 = Math.floor(Math.random() * 9 + 1);
    }

    console.log(random1);
    console.log(random2);
    console.log(random3);
}

// Capture Value of Submitted Buttons

function inputCapture() {
    console.log("Made it to Capture");
    var guess1 = $("#guess1").val();
    guessCheck1(guess1);
    var guess2 = $("#guess2").val();
    guessCheck2(guess2);
    var guess3 = $("#guess3").val();
    guessCheck3(guess3);
}

// Check Submitted Values against Randomly Generated Numbers

function guessCheck1(guess1) {
    if(guess1 == random1){
        console.log("Turn Box Green");
    } else if(guess1 == random2 || guess1 == random3){
        console.log("Turn Box Yellow");
    } else {
        console.log("Turn Box Red");
    }
}

function guessCheck2(guess2) {
    if(guess2 == random2){
        console.log("Turn Box Green");
    } else if(guess2 == random1 || guess2 == random3){
        console.log("Turn Box Yellow");
    } else {
        console.log("Turn Box Red");
    }
}

function guessCheck3(guess3) {
    if(guess3 == random3){
        console.log("Turn Box Green");
    } else if(guess3 == random2 || guess3 == random1){
        console.log("Turn Box Yellow");
    } else {
        console.log("Turn Box Red");
    }
}



$(function () {

    // Generate Random Numbers onload
    window.onload = randomGenerator;

    // Submit answer to be checked against random numbers
    $("#submit").on("click", inputCapture);


});