const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;

const KEY_BACKSPACE = 8;
const KEY_ENTER = 13;

var inputText = "";

//http://stackoverflow.com/questions/1772179/get-character-value-from-keycode-in-javascript-then-trim

function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    player.setUpControls(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_RIGHT_ARROW, KEY_LEFT_ARROW);
}

function keyPressed(evt) {
    evt.preventDefault();

    var key = evt.keyCode;

    if (isArrowKey(key)) {
        setKeyHoldState(key, player, true);
    } else if (inputText.length > 0 && key === KEY_BACKSPACE) {
        inputText = inputText.substring(0, inputText.length - 1);
    } else if (key !== KEY_BACKSPACE && key !== KEY_ENTER) {
        inputText += String.fromCharCode(key);
    }
}

function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, player, false);
}

function setKeyHoldState(keyCode, whichPlayer, setTo) {
    if (keyCode === whichPlayer.controlKeyForNorth) {
        whichPlayer.keyHeld_North = setTo;
    }
    if (keyCode === whichPlayer.controlKeyForSouth) {
        whichPlayer.keyHeld_South = setTo;
    }
    if (keyCode === whichPlayer.controlKeyForEast) {
        whichPlayer.keyHeld_East = setTo;
    }
    if (keyCode === whichPlayer.controlKeyForWest) {
        whichPlayer.keyHeld_West = setTo;
    }
}

function isArrowKey(keyCode) {
    if (keyCode === KEY_UP_ARROW || keyCode === KEY_DOWN_ARROW || keyCode === KEY_LEFT_ARROW || keyCode === KEY_RIGHT_ARROW) {
        return true;
    }
    return false;
}


function drawKeyInput() {
    drawText(inputText, 10, canvas.height-20, "#FFFFFF", " 15px Consolas", "left");
}