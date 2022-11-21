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
  circle(xBolinha,yBolinha,diametro);
  //xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  //Limite de borda horizontal
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  //Limite de borda vertical
  if(yBolinha + raio> height|| yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}
