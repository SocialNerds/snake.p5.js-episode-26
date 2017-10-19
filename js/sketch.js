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

    // Check capture.
    if (mySnake.capture(myFood.x, myFood.y)) {
        myFood.create();
    }

    // Draw food.    
    myFood.draw();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        mySnake.direction = 1;
    }
    else if (keyCode == RIGHT_ARROW) {
        mySnake.direction = 2;
    }
    else if (keyCode == DOWN_ARROW) {
        mySnake.direction = 3;
    }
    else if (keyCode == LEFT_ARROW) {
        mySnake.direction = 4;
    }
}