var trex, trex_running, edges;
var groundImage;
var chao
var chaojpg
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  chaojpg=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
 trex = createSprite(50,175,25,25);
trex.addAnimation("meteoro",trex_running);
  //adicione dimensão e posição ao trex
 trex.scale=0.5
 
 chao = createSprite(300,195,600,5);
 chao.addImage(chaojpg)
}


function draw(){
  //definir a cor do plano de fundo 
  background ("white");
  
  //registrando a posição y do trex
  console.log(trex.y);
  
  //pular quando tecla de espaço for pressionada
 if(keyDown("space")){
trex.velocityY=-5;

}
trex.velocityY=trex.velocityY +0.8;
trex.collide(chao);
chao.velocityX=-20
  
 //impedir que o trex caia
  drawSprites();
  if(chao.x<0)
  {
    chao.x=chao.width/2
  }
  
}