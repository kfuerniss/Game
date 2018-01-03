// Enemies our player must avoid
var Enemy = function(X,Y) {
    
    this.sprite = 'images/enemy-bug.png';
    this.x = X;
    this.y = Y;
    this.speed = Math.floor((Math.random() * 3));
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 550) {
    	this.initialize();
    }
    else {
    	this.x = this.speed;
	}

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(X,Y){

	this.sprite = 'images/char-boy.png';
	this.x = X;
    this.y = Y;
};

Player.prototype.update = function(dt){

};

Player.prototype.render = function() {

	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keypress) {
	switch (keypress){
		case 'left':
			this.x -= 101;
			break;
		case 'right':
			this.x += 101;
			break;
		case 'up':
			this.y -= 83; 
			break;
		case 'down':
			this.y += 83;
			break;
	}
	if (this.y <= 0)
		this.reset();
};

Player.prototype.reset = function(){
	this.x = 200;
	this.y = 391;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Place the player object in a variable called player
var player = new Player(200,391);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
