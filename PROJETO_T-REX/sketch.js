var trex, trexCorrendo;
var chao, chaoImagem, chaoInvisivel;
var nuvemImg;
var numAleat;
var cactoimg1, cactoimg2, cactoimg3;
var cactoimg4, cactoimg5, cactoimg6;

// Funçao para carregar os arquivos que vao ser usados
function preload() {
  trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
  chaoImagem = loadImage("ground2.png");
  nuvemImg = loadImage("cloud.png");
  cactoimg1 = loadImage("obstacle1.png");
  cactoimg2 = loadImage("obstacle2.png");
  cactoimg3 = loadImage("obstacle3.png");
  cactoimg4 = loadImage("obstacle4.png");
  cactoimg5 = loadImage("obstacle5.png");
  cactoimg6 = loadImage("obstacle6.png");
}

// Função que vai ser executada apenas uma vez
function setup(){
  createCanvas(600,200);

  //cria os sprites e os configura
  trex = createSprite(50,150,20,50);
                      //texto sobre a animaçao , variavel da img
  trex.addAnimation("trex quando está correndo", trexCorrendo);
  trex.scale = 0.5;
  trex.depth = 2;

  // cria e configura o chao
  chao = createSprite(300,175,600,10);
  chao.addImage("chao do jogo", chaoImagem);
  chao.velocityX = -3;

  chaoInvisivel = createSprite(300,190,600,10);
  chaoInvisivel.visible = false;


}

function draw(){
  background("white");
  numAleat = Math.round(random(10,100));
  
  drawSprites();

  pular();
  infinity();
  criaNuvens();
  criaObstaculos();

  // trex colide com o chao (nao cai)
  trex.collide(chaoInvisivel);

}

// funcao que permite o dino a pular
function pular() {
    //keyIsDown(UP_ARROW)
  if(keyDown("space") && trex.isTouching(chao) ){
    trex.velocityY = -13;
  }
  trex.velocityY += 0.8;  
}

// funcao que permite o chao ser ibfinito (nao acabar nunca)
function infinity() {
  if(chao.x < 0){
    chao.x = chao.width/2;
  }
}

// funcao que gera as nuvens
function criaNuvens() {
  if (frameCount%150 === 0|| frameCount === 1){
    var nuvem = createSprite(610,numAleat,20,15);
    nuvem.velocityX = -1;
    nuvem.addImage(nuvemImg);
    nuvem.scale = 0.7;
    nuvem.depth = 1;
    nuvem.lifetime = 650;
  }
}

// funcao que gera os cactos
function criaObstaculos() {
  if (frameCount%80 === 0 || frameCount === 5){
    var cacto = createSprite(610,160,20,15);
    cacto.velocityX = -3;
    cacto.scale = 0.5;
    cacto.depth = 1;
    cacto.lifetime = 500;
    
    var escolha = Math.round(random(1,6));
    switch(escolha){
      case 1:
        cacto.addImage(cactoimg1);
        break;
      case 2:
        cacto.addImage(cactoimg2);
        break;
      case 3:
        cacto.addImage(cactoimg3);
        break;
      case 4:
        cacto.addImage(cactoimg4);
        break;
      case 5:
        cacto.addImage(cactoimg5);
        break;
      case 6:
        cacto.addImage(cactoimg6);
        cacto.scale = 0.4;
        break;

      default: break;
    }
  }
}