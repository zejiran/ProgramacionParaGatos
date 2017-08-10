var texto = document.getElementById("textolinea");
var botoncito = document.getElementById("boton");
var borrando = document.getElementById("borrar");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var o = 0;
var yii = 0;
var yff = 0;
var t = 0;

function drawlinea(color, xi, yi, xf, yf){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

function borrar(){
  lienzo.clearRect(0, 0, d.width, d.height);
}

function dibujoporclick(){
  console.log(lienzo);
  var lineas = parseInt(texto.value);
  var l = 0;
  var x = 1;
  var l2 = 0;
  var x2 = 1;
  var yi, xf;
  var rect = 0;
  var rect1 = 0;
  var rect2 = 0;
  var rect3 = 0;
  var espacio = ancho / lineas

  for(l = 0; l < lineas; l= l+ 2){
    yi = espacio * l;
    xf = (l + 1) * espacio;
    drawlinea("red", 0, yi, xf, 300);
    console.log("Linea " + l);
  }

  while(x < lineas){
    yi = espacio * x;
    xf = (x + 1) * espacio;
    drawlinea("blue", 0, yi, xf, 300);
    console.log("Linea " + x);
    x = x + 2;
  }

  while(l2 < lineas){
    yi = espacio * l2;
    xf = (l2 + 1) * espacio;
    drawlinea("grey", 300, yi, xf, 0);
    console.log("Linea " + l2);
    l2 = l2 + 2;
  }

  while(x2 < lineas){
    yi = espacio * x2;
    xf = (x2 + 1) * espacio;
    drawlinea("pink", 300, yi, xf, 0);
    console.log("Linea " + x2);
    x2 = x2 + 2;
  }

  drawlinea("black", 1,1,1,299);
  drawlinea("black", 1,299,299,299);
  drawlinea("black", 299,1,1,1);
  drawlinea("black", 299,299,299,1);

  while(rect < lineas){
    yi = espacio * rect;
    xf = (x2 + 1) * espacio;
    drawlinea("green", 0, yi, 150, 300);
    console.log("Linea " + x2);
    rect = rect + 1;
  }

  while(rect1 < lineas){
    yi = espacio * rect1;
    xf = (x2 + 1) * espacio;
    drawlinea("purple", 300, yi, 150, 0);
    console.log("Linea " + x2);
    rect1 = rect1 + 1;
  }

  while(rect2 < lineas){
    yi = espacio * rect2;
    drawlinea("blue", 0, yi, xf, 300);
    console.log("Linea " + x2);
    rect2 = rect2 + 1;
  }

  while(rect3 < lineas){
    xf = espacio * rect3;
    drawlinea("brown", 300, yi, xf, 0);
    console.log("Linea " + x2);
    rect3 = rect3 + 1;
  }
  o = 0;
  yii = 0;
  yff = 0;
  t = 0;
}
