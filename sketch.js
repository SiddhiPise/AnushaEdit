var canvas, backgroundImage;

var gameState = 0;

var form, player, game;




function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  form = new Form ();
  form.display();
}


function draw(){
 var  myVar =0;
  if(gameState === 1){
    clear();
    
    myFunction();
    
    
    
  }
  
  if(gameState === 2){
    game =new Game();
    clear();
     game.play() 
  }


  function alertFunc() {
    gameState =2;
    console.log(gameState)
  }
  function myFunction() {
    setTimeout(alertFunc, 3000);
   }

}
