const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;

var inputText = "";

function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    player.setUpControls(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_RIGHT_ARROW, KEY_LEFT_ARROW);
}

function keyPressed(evt) {
    evt.preventDefault();

    if (isArrowKey(evt.keyCode)) {
        setKeyHoldState(evt.keyCode, player, true);
    } else {
        inputText += evt.keyCode;
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
    drawText(inputText, 10, 10, "#FFFFFF", "Calibri 20px", "left");
}