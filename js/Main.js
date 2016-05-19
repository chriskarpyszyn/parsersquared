const FPS = 30;
var canvas;
var canvasContext;

var player =  new PlayerClass();

window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    startGame();
}

function move() {
    player.move();
}

function draw() {
    colorRect(0, 0, canvas.width, canvas.height, "#000000");
    player.drawPlayer();
    drawKeyInput();
}

function startGame() {

    player.init();
    initInput();

    setInterval(function() {
        move();
        draw();
    }, 1000 / FPS);

}