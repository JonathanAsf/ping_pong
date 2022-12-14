//Esfera
//Variáveis da esfera
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro /2;
//Velocidade da esfera
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

//Raquetes

//Variáveis da raquete do oponente

let xRaqueteOponente = 585
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Variáveis da raquete do aliado

let xRaquete = 5;
let yRaquete = 150;
let bRaquete = 10;
let hRaquete = 90;


//Background
function setup() {
  createCanvas(600, 400);
}

//Função principal
function draw() {
  background(0);
  bolinha();
  movimentaBolinha();
  colisao();
  raquete(xRaquete, yRaquete);
  raquete(xRaqueteOponente, yRaqueteOponente);
  raqueteColisao(xRaquete,yRaquete);
  raqueteColisao(xRaqueteOponente,yRaqueteOponente);
  
  movimentoRaquete();
  movimentoRaqueteOponente();
}

//Função das coordenadas da esfera
function bolinha(){
  circle(xBolinha,yBolinha,diametro);
}
  
//Funções do movimento da esfera
function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}
//Verificação de colisão com a borda
function colisao(){
  
//Eixo X
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
//Eixo Y
  if(yBolinha + raio> height|| yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}
  
function raquete (x,y){
  rect(x,y, bRaquete, hRaquete)
  }



function raqueteColisao(x,y){
  colidiu = collideRectCircle(x,y,bRaquete,hRaquete,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadexBolinha *= -1;
  }
  
}

function movimentoRaquete (){
  if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
  if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
  }
function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - ((hRaquete/2) -30) 
  yRaqueteOponente += velocidadeYOponente
}
  
