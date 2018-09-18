/* PSEUDOCODE OUTLINE
on start, program creates a random mumber (Funtion1)
on start, program assigns a random number to each of the crystals
(function2)

on user click of any of the (4) crystals, add the random value of the 
crytal (as set by the program randomly ie. yellow =4, blue = 3 etc..)
    add the value of the clicked crystal to #scoreText in the HTML 
    (function3)
    keep doing this until the following conditions occur:
        If scoreText is > #gameNumbertext
        then add (1) point to #lossText in the HTML

        If scoreText is = to #gameNumberText
        then add (1) point to #winsText in the HTML

        If scoreText > #gameNumberText
        then add (1) point to #winsText in the HTML
        (function4)
On user win or loss, the above sequence is repeated 
(function5)
*/
$(document).ready(function() {
    
    var min = 19;                       //for use in the gameNumberGenerator function
    var max = 120;                      //for use in the gameNumberGenerator function
    var redCrystalNumRandomMin = 1;    //for use in the redCrystalValueGenerator function
    var redCrystalNumRandomMax = 12;   //for use in the redCrystalValueGenerator function
    var blueCrystalNumRandomMin = 1;    //for use in the redCrystalValueGenerator function
    var blueCrystalNumRandomMax = 12;   //for use in the redCrystalValueGenerator function
    var yellowCrystalNumRandomMin = 1;    //for use in the redCrystalValueGenerator function
    var yellowCrystalNumRandomMax = 12;   //for use in the redCrystalValueGenerator function
    var greenCrystalNumRandomMin = 1;    //for use in the redCrystalValueGenerator function
    var greenCrystalNumRandomMax = 12;   //for use in the redCrystalValueGenerator function

    //onclick events
 
    $("#startButton").on("click", function() {
        $(gameNumGenerator)
    });

    $("#redCrystalBtn").on("click", function() {
        $(RedcrystalValueGenerator)
        console.log('Red button clicked'); 
    });

    $("#blueCrystalBtn").on("click", function() {
        $(BlueCrystalValueGenerator)
        console.log('Blue button clicked'); 
    });

    $("#yellowCrystalBtn").on("click", function() {
        $(YellowCrystalValueGenerator)
        console.log('Yellow button clicked'); 
    });

    $("#greenCrystalBtn").on("click", function() {
        $(GreenCrystalValueGenerator)
        console.log('Green button clicked'); 
    });

    //called functions

    function gameNumGenerator() {
        var gameNumRandom = Math.floor(Math.random()*(max - min + 1)) + min;
        $("#gameNumberText").text(gameNumRandom);
        console.log(gameNumRandom);
    }

    function RedcrystalValueGenerator() {
        var RedCrystalNumRandom = Math.floor(Math.random()*(redCrystalNumRandomMax - redCrystalNumRandomMin + 1)) + redCrystalNumRandomMin;
        $("#redCrystalBtn").text(RedCrystalNumRandom);
        console.log(RedCrystalNumRandom);
    }

    function BlueCrystalValueGenerator() {
        var BlueCrystalNumRandom = Math.floor(Math.random()*(blueCrystalNumRandomMax - blueCrystalNumRandomMin + 1)) + blueCrystalNumRandomMin;
        $("#blueCrystalBtn").text(BlueCrystalNumRandom);
        console.log(BlueCrystalNumRandom);
    }

    function YellowCrystalValueGenerator() {
        var YellowCrystalNumRandom = Math.floor(Math.random()*(yellowCrystalNumRandomMax - yellowCrystalNumRandomMin + 1)) + yellowCrystalNumRandomMin;
        $("#yellowCrystalBtn").text(YellowCrystalNumRandom);
        console.log(YellowCrystalNumRandom);
    }

    function GreenCrystalValueGenerator() {
        var GreenCrystalNumRandom = Math.floor(Math.random()*(greenCrystalNumRandomMax - greenCrystalNumRandomMin + 1)) + greenCrystalNumRandomMin;
        $("#greenCrystalBtn").text(GreenCrystalNumRandom);
        console.log(GreenCrystalNumRandom);
    }
   




















});