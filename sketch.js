 var trex, trex_running,trexmimir, edges; 

 var groundImage;

 var chao
 
 var nuvem

 var nuvemjpg

 var fimdejogo=0

 var jojo=1

 var estadodojogo=jojo
 
 var grupoverde

 var grupobranco

 var chaojpg

 var chaopou2

 var cactus
 var catus1
 var catus2
 var catus3
 var catus4
 var catus5
 var catus6

  //oque carrega todas as imagems no jogo
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  trexmimir=loadAnimation("trex_collided.png")
  chaojpg=loadImage("ground2.png");
  nuvemjpg=loadImage("uvem.png");
  catus1=loadImage("obstacle1.png");
  catus2=loadImage("obstacle2.png");
  catus3=loadImage("obstacle3.png");
  catus4=loadImage("obstacle4.png");
  catus5=loadImage("obstacle5.png");
  catus6=loadImage("obstacle6.png");

}
  //a propoção do cenario(n aumenta muito pq ai n carrega)
function setup(){
  createCanvas(600,200);
  grupoverde = new Group();
  grupobranco = new Group();
  //criando o trex
 trex = createSprite(50,175,25,25);
 trex.addAnimation("meteoro",trex_running);
 trex.addAnimation("feddy",trexmimir);
  //adicione dimensão e posição ao trex
 trex.scale=0.5
  //o q defini onde chao fica (melhor nome ever)
 chao = createSprite(300,180,600,5);
 chao.addImage(chaojpg) 
 chaopou2 = createSprite(300,190,600,10);
 chaopou2.visible=false
 trex.setCollider("circle",0,0,35)
 trex.debug=false
}

function draw(){
  //definir a cor do plano de fundo 
  background ("white");
  
  if(estadodojogo == jojo){
          //pular quando tecla de espaço for pressionada(n da pra spamar)
          if(keyDown("space")&&trex.y>160.5){
          trex.velocityY=-13;
          //mostra a altura do trex
          console.log(trex.y);
          //oque faz o trex n sai da tela caindo no void infinito
          }
          trex.velocityY=trex.velocityY +0.8;
      
          chao.velocityX=-10
          //parte 2 do faz nuvem(to chamando ela)
          uvem()
          //oque faz o chão se infinito
          
          if(chao.x<0)
          {
            chao.x=chao.width/2
          }
          if(grupoverde.isTouching(trex)){
            estadodojogo = fimdejogo
          }
          fazCactus();
         
}

  else if(estadodojogo == fimdejogo){
    chao.velocityX=0;
    trex.velocityY=0;
    grupobranco.setLifetimeEach(-1);
    grupoverde.setLifetimeEach(-1);
    grupobranco.setVelocityXEach(0)
    grupoverde.setVelocityXEach(0)
    trex.changeAnimation("feddy",trexmimir)
  }
  trex.collide(chaopou2);
  drawSprites();
 
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
  trex.depth=trex.depth
  nuvem.lifetime=360;
  grupobranco.add(nuvem);
 }
}
function fazCactus(){
  if(frameCount %120==0){
  cactus=createSprite(600,175);
  cactus.velocityX=-6
  var zoio=Math.round(random(1,6))
  cactus.scale=0.5
  cactus.lifetime=360;
  switch (zoio) {
    case 1:cactus.addImage(catus1);
      
      break;
    case 2:cactus.addImage(catus2);
      
      break;
    case 3:cactus.addImage(catus3);
      
      break;
    case 4:cactus.addImage(catus4);
      
      break;
    case 5:cactus.addImage(catus5);
      
      break;
    case 6:cactus.addImage(catus6);
      
    break;
    default:
      break;
  }
  grupoverde.add(cactus);
}

}

//bo morre nuvem
