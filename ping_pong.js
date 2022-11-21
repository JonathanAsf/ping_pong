
//Variáveis da esfera
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro /2;
//Velocidade da esfera
let velocidadexBolinha = 5
let velocidadeyBolinha = 5

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
}
