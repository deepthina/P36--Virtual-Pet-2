var dog, dogImage, dogHappyImage;

var database;
var readFood, food;

var bottle, bottleImage;

var form, milk;

var readLastFeed, lastFed;




function preload() {
  dogImage = loadImage("images/dogImg.png");
  dogHappyImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 800);

  dog = createSprite(600, 500);
  dog.addImage("dog", dogImage);
  dog.addImage("dog happy", dogHappyImage);
  dog.scale = 0.3;

  database = firebase.database();

  readFood = database.ref("Food");
  readFood.on("value", readMilk);

  readLastFeed = database.ref("lastFed");
  readLastFeed.on("value", readFeed);

  form = new Form();
  milk = new Food();

}


function draw() {
  background("green");

  form.display();
  milk.display();

  drawSprites();

  textSize(15);
  fill("white");

  if (lastFed > 12)
    text("Last Feed: " + (lastFed % 12) + " PM", 230, 65);

  else if (lastFed == 0)
    text("Last Feed: " + 12 + "AM", 230, 65);

  else
    text("Last Feed: " + lastFed + "AM", 230, 65);

}


function writeMilk(food) {
  database.ref("/").update({ Food: food });
  lastFed= hour();
  writeFeed(lastFed);
}



function readMilk(data) {
  food = data.val();
}

function readFeed(data) {
  lastFed = data.val();
}


function writeFeed(lastFed){
  database.ref("/").update({lastFed: lastFed});
}
