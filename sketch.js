 var trex, trex_running, edges; 

 var groundImage;

 var chao
 
 var nuvem

 var nuvemjpg

 var chaojpg

 var chaopou2

  //oque carrega todas as imagems no jogo
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  chaojpg=loadImage("ground2.png");
  nuvemjpg=loadImage("uvem.png");
}
  //a propoção do cenario(n aumenta muito pq ai n carrega)
function setup(){
  createCanvas(600,200);
  
  //criando o trex
 trex = createSprite(50,175,25,25);
 trex.addAnimation("meteoro",trex_running);
  //adicione dimensão e posição ao trex
 trex.scale=0.5
  //o q defini onde chao fica (melhor nome ever)
 chao = createSprite(300,180,600,5);
 chao.addImage(chaojpg) 
 chaopou2 = createSprite(300,190,600,10);
 chaopou2.visible=false
}

function draw(){
  //definir a cor do plano de fundo 
  background ("white");
  
  //pular quando tecla de espaço for pressionada(n da pra spamar)
  if(keyDown("space")&&trex.y>160.5){
  trex.velocityY=-10;
  //mostra a altura do trex
  console.log(trex.y);
  //oque faz o trex n sai da tela caindo no void infinito
   }
  trex.velocityY=trex.velocityY +0.8;
  trex.collide(chaopou2);
  chao.velocityX=-10
  //parte 2 do faz nuvem(to chamando ela)
  uvem()
  //oque faz o chão se infinito
  drawSprites();
  if(chao.x<0)
  {
    chao.x=chao.width/2
  }
}
  //isso faz nuvem ou peido depende:D
function uvem(){
 if(frameCount %120==0){
  nuvem=createSprite(600,80,30,30);
  nuvem.velocityX=-2;
  nuvem.addImage(nuvemjpg);
  nuvem.scale=0.7;
  nuvem.y=Math.round(random(20,100));
  nuvem.depth=trex.depth
  trex.depth=trex.depth+1;
 }
}
