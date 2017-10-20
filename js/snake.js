function Snake() {
    this.x = 0;
    this.y = 0;

    this.queue = [];

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

        // Draw queue;
        this.queue.forEach(function(position) {
            rect(position[0], position[1], step, step);
        });
    }

    this.capture = function(fx, fy) {
        if (dist(this.x, this.y, fx, fy) < 1) {
            return true;
        }
    }

    this.expand = function(fx, fy) {
        // Add a new item at the top of the queue.
        this.queue.push([fx, fy]);
    }

    // Rearrange queue.
    this.moveQueue = function() {
        this.queue.push([this.x, this.y]);
        this.queue.shift();
    }

    // Check if snake crashes to its tail.
    this.crash = function() {
        for (i = 0; i < this.queue.length; i++) {
            if (dist(this.x, this.y, this.queue[i][0], this.queue[i][1]) < 1) {
                return true;
            }
        }
    }
}
