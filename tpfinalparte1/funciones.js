
//Función que carga imágenes
function cargarImagen (imagen) {
  image(imagen,0,0,ancho,alto);
}

//Función que carga textos
function cargarTexto (texto) {
  text(texto,25,360,560,110);
}

//Función que realiza la pantalla de menú
function menu(){
  cargarImagen(arrayImagen[0]);
  dibujaStart();
  dibujaCreditos();
}

//Función utilizada para avanzar entre pantallas con texto
function cambioEstado(inicio,pantalla,indice,automatico) {
  for(i=inicio;i<indice;i++){
    cargarImagen(arrayImagen[pantalla]);
    strokeWeight(5);
    stroke(0);
    fill(255);
    //textAlign(LEFT);
    if (automatico){
      cargarTexto(arrayTexto[pantalla]);
      if(estado<(indice-1)){
        dibujaSiguiente();
      }
    }else{
       rect(20,355,600,110);
       cargarTexto(arrayTexto[pantalla]);
       if(estado<(indice)){
         dibujaSiguiente();
       }
    }
  }
}

//Función utilizada para bifurcar los caminos de la aventura dibujando los botones
function desicion(pantalla){
  cargarImagen(arrayImagen[pantalla]);
  if(pantalla===10){
    dibujaDecision(200,"Elegir TELEPATÍA");
    dibujaDecision(0,"Elegir FUERZA")
  }
  
  if(pantalla==14){
    dibujaDecision(200,"ACEPTAR");
    dibujaDecision(0,"NEGARSE")
  }
  
  if(pantalla==16){
    dibujaDecision(200,"Pelear SOLO");
    dibujaDecision(0,"Pelear en GRUPO")
  }
  
  if(pantalla==31){
    dibujaDecision(200,"SALIR");
    dibujaDecision(0,"Esconderse en una cueva")
  }
}

//Función utilizada para la pantalla de créditos
function creditos(){
  cargarImagen(arrayImagen[0]);
  dibujaAtrás();
  strokeWeight(5);
  stroke(0);
  fill(255);
  rect(60,90,500,360);
  text(arrayTexto[0],70,115,480,300);
}
