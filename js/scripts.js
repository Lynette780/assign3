
// Plant
var plant1 = "<img src='imgs/plant1.PNG'>";
var plant2 = "<img src='imgs/plant2.PNG'>";
var plant3 = "<img src='imgs/plant3.PNG'>";
var plant4 = "<img src='imgs/plant4.PNG'>";
var plant = [plant1, plant2, plant3, plant4]

//Pots
var pot1 = "<img src='imgs/pot1.PNG'>";
var pot2 = "<img src='imgs/pot2.PNG'>";
var pot3 = "<img src='imgs/pot3.PNG'>";
var pot4 = "<img src='imgs/pot4.PNG'>";
var pot = [pot1, pot2, pot3, pot4]

//Quotes - from: https://psycatgames.com/magazine/quotes/short-quotes/
var quote1 = "“Don’t rush things.“";
var quote2 = "“Feel the fear and do it anyway“";
var quote3 = "“Love conquers all.“";
var quote4 = "“The best is yet to come.“";
var quote5 = "“Follow your heart.“";
var quote6 = "“No rain. No flowers.“";
var quote7 = "“Don’t rush things.“";
var quote8 = "“Live the moment“.";
var quote9 = "“Choose to shine.”";
var quote10 = "“Focus on the good.”";
var quote11 = "“Enjoy the little things.”";
var quote12 = "“Never stop dreaming.”";
var quote13 = "“Keep moving forward“";
var quote14 = "“In teaching others we teach ourselves.”";
var quote15 = "“Be Happy.”";
var quote16 = "“Love the life you live, and live the life you love.”";
var quote = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8,
    quote9, quote10, quote11, quote12, quote13, quote14, quote15, quote16]


//slect on click
$(".plant").on("click", plantChange)
$(".pot").on("click", potChange)
$(".check").on("click", quoteChange)


$(document).on("keypress", function (e) {
    if (e.key == '1') {
        plantChange();
    }
})

function plantChange() {
    var randomNum = Math.floor(Math.random() * plant.length);
    $(".plant").html(plant[randomNum]);
}

$(document).on("keypress", function (e) {
    if (e.key == '1') {
        potChange();
    }
})

function potChange() {
    var randomNum = Math.floor(Math.random() * pot.length);
    $(".pot").html(pot[randomNum]);
}

function quoteChange() {
    console.log("quoteChnage")
    var randomNum = Math.floor(Math.random() * quote.length);
    $(".quote").text(quote[randomNum]);
}

var sound = document.getElementById("sound");

$(".check").on("click", function () {
    sound.play();
});
