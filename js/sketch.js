let mySnake, myFood;
const step = 10;

function setup() {
    createCanvas(600, 600);

    // Set slower frame rate.
    frameRate(20);

    // Create the main snake object.
    mySnake = new Snake();

    // Create the starting food object.
    myFood = new Food();
    myFood.create();
}
  
function draw() {
    // Set background.
    background(0);

    // Move and draw snake.
    mySnake.move();
    mySnake.draw();

    // Lost bitch!
    if (mySnake.crash()) {
        textSize(60);
        fill(255, 0, 0);
        textAlign(CENTER);
        text("You suck!", 300, 300);
        frameRate(0);
    }

    // Check capture.
    if (mySnake.capture(myFood.x, myFood.y)) {
        mySnake.expand(myFood.x, myFood.y);
        myFood.create();
    }

    // Redraw queue.
    mySnake.moveQueue();

    // Draw food.    
    myFood.draw();
}

/**
 * Select direction.
 */
function keyPressed() {
    if (keyCode == UP_ARROW && mySnake.direction != 3) {
        mySnake.direction = 1;
    }
    else if (keyCode == RIGHT_ARROW && mySnake.direction != 4) {
        mySnake.direction = 2;
    }
    else if (keyCode == DOWN_ARROW && mySnake.direction != 1) {
        mySnake.direction = 3;
    }
    else if (keyCode == LEFT_ARROW && mySnake.direction != 2) {
        mySnake.direction = 4;
    }
}