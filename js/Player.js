const PLAYER_MOVE_SPEED = 5;
const PLAYER_WIDTH = 15;
const PLAYER_HEIGHT = 15;

function PlayerClass() {

    this.init = function() {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
    }

    // player control
    this.keyHeld_North = false;
    this.keyHeld_South = false;
    this.keyHeld_East = false;
    this.keyHeld_West = false;

    this.move = function () {
        var nextX = this.x;
        var nextY = this.y;

        if (this.keyHeld_North) {
            nextY -= PLAYER_MOVE_SPEED;
        }
        if (this.keyHeld_South) {
            nextY += PLAYER_MOVE_SPEED;
        }
        if (this.keyHeld_East) {
            nextX += PLAYER_MOVE_SPEED;
        }
        if (this.keyHeld_West) {
            nextX -= PLAYER_MOVE_SPEED;
        }

        if (nextX > 0 && nextX+PLAYER_WIDTH < canvas.width && nextY > 0 && nextY+PLAYER_HEIGHT < canvas.height) {
            this.x = nextX;
            this.y = nextY;
        }
    }

    this.setUpControls = function(northKey, southKey, eastKey, westKey) {
        this.controlKeyForNorth = northKey;
        this.controlKeyForSouth = southKey;
        this.controlKeyForEast = eastKey;
        this.controlKeyForWest = westKey;
    }

    this.drawPlayer = function() {
        colorRect(this.x, this.y, PLAYER_WIDTH, PLAYER_HEIGHT, "#B995E8");
    }

}