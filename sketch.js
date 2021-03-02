var dog,sadDog,happyDog;
var foodObj
var fDog, aFood
var database

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodObj = new Food()
  var foodStockRef = database.ref('food')
  foodStockRef.on("value",(data)=>{
    foodObj.foodStock = data.val()
  })
  fDog = createButton("Feed Dog")
  aFood = createButton("Add Food")
  fDog.position(600,80)
  aFood.position(700,80)
}

function draw() {
  background(46,139,87);
  foodObj.display()
  aFood.mousePressed(function(){
     foodObj.addFood()
       dog.addImage(sadDog)
     
  })
  fDog.mousePressed(function(){
    foodObj.feedDog()
    dog.addImage(happyDog)
  })
  
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
