// Correa Yesica Com2 Legajo: 119001/3
//https://youtu.be/g69fy1mXh8g

let foto;
let cantc;
let cantf;
let tamCua;
let tamCir;
let tamcirInicial;
let colorNegro;
let colorOriginal;

function preload() {
  foto = loadImage('data/miimagen.png');
}

function setup() {
  createCanvas(800, 400);
  cantc = 20;
  cantf = 20; 
  tamCua = width / cantc;
  tamCir = tamCua / 2; 
  tamcirInicial = tamCir; 
  colorNegro = color(0);        
  colorOriginal = colorNegro;     
}

function draw() {  
  background(255);      
  dibujarTablero(0, 0, tamCua, cantc, tamCir, cantf);
  image(foto, 0, 0);
}

function dibujarTablero (a, b, tamCua, cantc, tamCir, cantf) {
  noStroke();  
  
  for (let i = a; i < cantc; i++) {
    for (let j = b; j < cantf; j++) {     
      let x = i * tamCua;
      let y = j * tamCua;

      if ((i + j) % 2 == 0) {
        fill(colorNegro); 
        rect(x, y, tamCua, tamCua);
        fill(255); 
        ellipse(x + tamCua / 2, y + tamCua / 2, tamCir, tamCir);
      } else {
        fill(255);
        rect(x, y, tamCua, tamCua);
        fill(colorNegro);
        ellipse(x + tamCua / 2, y + tamCua / 2, tamCir, tamCir);
      }
    }
  }
}

function mousePressed() {
  colorNegro = cambioColor(255);
}

function cambioColor(cambio) { 
  let r = random(cambio);
  let g = random(cambio);
  let b = random(cambio);
  
  return color(r, g, b); 
}

function mouseMoved() {
  let colum = int(mouseX / tamCua); 
  let fila = int(mouseY / tamCua); 

  let cenX = colum * tamCua + tamCua / 2;
  let cenY = fila * tamCua + tamCua / 2;

  let distancia = dist(mouseX, mouseY, cenX, cenY);

  tamCir = map(distancia, 0, tamCua / 2, 0, tamCua);
}

function keyPressed() {
  Resetear();
}

function Resetear(){
  if (key == 'r' || key == 'R') {
    tamCir = tamcirInicial; 
    colorNegro = colorOriginal; 
  }
}
