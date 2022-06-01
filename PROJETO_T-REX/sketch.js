var trex, trexCorrendo;
var chao, chaoImagem, chaoInvisivel;


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

  // cria e configura o chao
  chao = createSprite(300,175,600,10);
  chao.addImage("chao do jogo", chaoImagem);
  chao.velocityX = -3;

  chaoInvisivel = createSprite(300,190,600,10);
  chaoInvisivel.visible = false;


}

function draw(){
  background(220);
  drawSprites();

  pular();
  infinity();

  // trex colide com o chao (nao cai)
  trex.collide(chaoInvisivel);

  console.log(chao.x);
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