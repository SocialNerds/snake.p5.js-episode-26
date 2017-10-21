function Food () {

    this.x = 0;
    this.y = 0;

    // The number of positions a food item may appear.
    const grid_number = 600 / step;

    this.create = function() {
        this.x = Math.floor(Math.random() * grid_number) * step;
        this.y = Math.floor(Math.random() * grid_number) * step;
    }

    this.draw = function() {
        fill(255, 0, 0);
        image(dollar, this.x, this.y, step / 2, step / 2);
    }
}