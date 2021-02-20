class Form {
    constructor() {

    }
    display() {
        var feedButton = createButton("Feed the dog");
        feedButton.position(750, 100);

        var addMilkButton = createButton("Add Food");
        addMilkButton.position(850, 100);

       
        
        feedButton.mousePressed(function () {
            dog.changeImage("dog happy", dogHappyImage);
            if (food <= 0)
                food = 0;
            else {
                food = food - 1;
            }

            writeMilk(food);
        })

        addMilkButton.mousePressed(function(){
            food= food+1;

            writeMilk(food);
        })



    }
}