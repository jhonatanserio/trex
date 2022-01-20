 var trex, trex_running,trexmimir, edges; 

 var groundImage;

 var somPulante
 
 var acabo
 
 var acaboPng
 
 var restart

 var restartPng

 var check

 var chao

 var somFaleceu
 
 var ponto=0

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
  acaboPng=loadImage("gameOver.png")
  restartPng=loadImage("restart.png ")
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
  somPulante=loadSound("jump.mp3")
  check=loadSound("checkpoint.mp3")
  somFaleceu=loadSound("tututu.mp3")

}
  //a propoção do cenario(n aumenta muito pq ai n carrega)
function setup(){
  createCanvas(windowWidth,windowHeight);
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
 chao.addImage(chaojpg) ;
 chaopou2 = createSprite(300,190,600,10);
 chaopou2.visible=false;
 trex.setCollider("circle",0,0,35);
 trex.debug=false;
 
 restart=createSprite(width/2,height-520,10,10);
 restart.addImage(restartPng);
 restart.scale=0.5;
 restart.visible=false
 acabo = createSprite(width/2,height-550,10,10)
 acabo.addImage(acaboPng)
 acabo.scale=0.8;
 acabo.visible=false
}

function draw(){
  //definir a cor do plano de fundo 
  background ("white");
  text("ponto: "+ponto,500,50);
  ponto.depth+1;
  
  
  
  if(estadodojogo == jojo){
          //pular quando tecla de espaço for pressionada(n da pra spamar)
          if(keyDown("space")&&trex.y>160.5){
          trex.velocityY=-13;
          somPulante.play()
          //mostra a altura do trex
          console.log(trex.y);
          //oque faz o trex n sai da tela caindo no void infinito
          }
          trex.velocityY=trex.velocityY +0.8;
      
          chao.velocityX=-(10+0.5*ponto/200);
          //parte 2 do faz nuvem(to chamando ela)
          uvem()
          //oque faz o chão se infinito
          
          if(chao.x<0)
          {
            chao.x=chao.width/2;
          }
          if(grupoverde.isTouching(trex)){
            estadodojogo = fimdejogo;
            somFaleceu.play()
          }
          ponto=ponto+Math.round(frameCount/240);
          if(ponto>0&&ponto%400==0){
            check.play();
          }

          fazCactus();
         
}

  else if(estadodojogo == fimdejogo){
    chao.velocityX=0;
    trex.velocityY=0;
    grupobranco.setLifetimeEach(-1);
    grupoverde.setLifetimeEach(-1);
    grupobranco.setVelocityXEach(0);
    grupoverde.setVelocityXEach(0);
    trex.changeAnimation("feddy",trexmimir);
    ponto=ponto+0;
    acabo.visible=true
    restart.visible=true
    if(mousePressedOver(restart)){
     pontoZero ();
    }

    
  }
  trex.collide(chaopou2);
  drawSprites();
 
}
  //isso faz nuvem ou peido depende:D
function uvem(){
 if(frameCount %80==0*ponto/200){
  nuvem=createSprite(width,80,30,30);
  nuvem.velocityX=-(2+0.5*ponto/200)
  nuvem.addImage(nuvemjpg);
  nuvem.scale=0.7;
  nuvem.y=Math.round(random(20,100));
  nuvem.depth=trex.depth;
  trex.depth=trex.depth+1;
  nuvem.lifetime=620;
  grupobranco.add(nuvem);
 }
}
function fazCactus(){
  if(frameCount %60==0){
  cactus=createSprite(width,175);
  cactus.velocityX=-(6+0.5*ponto/200);
  var zoio=Math.round(random(1,6));
  cactus.scale=0.5;
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
function pontoZero(){
  estadodojogo=jojo;
  grupoverde.destroyEach();
  grupobranco.destroyEach();
  restart.visible=false
  acabo.visible=false
  ponto=0;
  trex.changeAnimation("meteoro",trex_running)
}

//bo morre nuvem
