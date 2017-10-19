function Snake() {
    this.x = 0;
    this.y = 0;

    // 1, 2, 3, 4.
    this.direction = 0;

    this.move = function() {
        if (this.direction == 1) {
            this.y -= step;
        }
        else if (this.direction == 2) {
            this.x += step;
        }
        else if (this.direction == 3) {
            this.y += step;
        }
        else if (this.direction == 4) {
            this.x -= step;
        }
    }

    this.draw = function() {
        fill(255);
        rect(this.x, this.y, step, step);
    }

    this.capture = function(fx, fy) {
        if (dist(this.x, this.y, fx, fy) < 1) {
            myFood.create();
        }
    }
}
