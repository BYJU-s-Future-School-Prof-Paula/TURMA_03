var trex, trexCorrendo;
var chao, chaoImagem;

// Funçao para carregar os arquivos que vao ser usados
function preload() {
  trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
  chaoImagem = loadImage("ground2.png");
}

// Função que vai ser executada apenas uma vez
function setup(){
  createCanvas(600,200);

  //cria os sprites e os configura
  trex = createSprite(50,150,20,50);
                      //texto sobre a animaçao , variavel da img
  trex.addAnimation("trex quando está correndo", trexCorrendo);
  trex.scale = 0.5;

  chao = createSprite(300,190,600,10);
  chao.addImage("chao do jogo", chaoImagem);
}

function draw(){
  background(220);
  drawSprites();

  pular();

  // trex colide com o chao (nao cai)
  trex.collide(chao);
}

// funcao que permite o dino a pular
function pular() {
    //keyIsDown(UP_ARROW)
  if(keyDown("space")){
    trex.velocityY = -13;
  }
  trex.velocityY += 0.8;  
}

