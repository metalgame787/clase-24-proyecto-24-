//Encuntra el error 
var playerPaddle, computerPaddle, ball;

function setup(){
createCanvas(600,600)
    // Agrega el código para crear los sprites, el area de trabajo. 
playerPaddle=createSprite(590,200,10,70);
computerPaddle=createSprite(10,200,10,70);
  ball=createSprite(305,200,10,10);
  
}

function draw(){
  background("black");
   // Llama a la función draw debajo
  drawSprites(); 
}