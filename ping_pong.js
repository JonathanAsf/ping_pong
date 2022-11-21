let xBolinha = 300;
let yBolinha = 200;
let tamanhoBolinha = 22;

let velocidadexBolinha = 5
let velocidadeyBolinha = 5


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha,yBolinha,tamanhoBolinha);
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
  if(xBolinha > width || xBolinha < 0){
    velocidadexBolinha *= -1;
  }
  
  if(yBolinha > height|| yBolinha < 0){
    velocidadeyBolinha *= -1;
  }
}
