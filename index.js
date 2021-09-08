var playerOneResult =0;
var playerTwoResult =0;
var image1 = document.querySelector("#p1").addEventListener('click', function (){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomimages = "images/dice" + randomNumber1 + ".png";
    console.log(randomimages);
    document.querySelector("#p1").setAttribute("src", randomimages);
    playerOneResult = randomNumber1;
    getResult();
});

var image2 = document.querySelector("#p2").addEventListener('click', function (){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomimages = "images/dice" + randomNumber1 + ".png";
    console.log(randomimages);
    document.querySelector("#p2").setAttribute("src", randomimages);
    playerTwoResult = randomNumber1;
    getResult();
});

var player1 = prompt("what is your name?");
document.querySelector("#player1").innerHTML= player1;
var player2 = prompt("what is your competitive?");
document.querySelector("#player2").innerHTML= player2;


function getResult(){
    if (playerOneResult > playerTwoResult){
        document.querySelector("h1").innerHTML =  player1 + " wins";
    }
    else if (playerTwoResult > playerOneResult){
        document.querySelector("h1").innerHTML = player2 + " wins";
    }

else {
    document.querySelector("h1").innerHTML = "Draw";
} 
}
