var trex, trexCorrendo;
var chao, chaoImagem, chaoInvisivel;
var nuvemImg;
var numAleat;

// Funçao para carregar os arquivos que vao ser usados
function preload() {
  trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
  chaoImagem = loadImage("ground2.png");
  nuvemImg = loadImage("cloud.png");
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
  if (frameCount%80 === 0){
    var nuvem = createSprite(610,numAleat,20,15);
    nuvem.velocityX = -2;
    nuvem.addImage(nuvemImg);
    nuvem.scale = 0.7;
    nuvem.depth = 1;
  }
}