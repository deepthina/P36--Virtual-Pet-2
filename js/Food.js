class Food {

    constructor() {
        this.image = loadImage("images/Milk.png");
    }

    display() {
        var x = 80;
        var y = 100;       
     
        if (food != 0) {

            imageMode(CENTER);
            image(this.image, 450,540, 70,70);

            for (var i = 0; i < food-1; i++) {
                if (i % 10 === 0) {
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30;
            }

        }
    }
}