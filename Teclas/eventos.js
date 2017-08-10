var teclas = {
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37
};

document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("aread");
var papel = cuadro.getContext("2d");

var boton1 = document.getElementById("1");
var boton2 = document.getElementById("2");
boton1.addEventListener("click", color1);
boton2.addEventListener("click", color2);
var color = "red";

function color1(){
  color = "black";
}

function color2(){
  color = "white";
}

var x = 150;
var y = 150;

drawlinea(color, 149, 149, 151 , 151, papel);

function dibujarTeclado(evento){
  var movimiento = 10;
  console.log(evento.keyCode);
  switch(evento.keyCode){
    case teclas.UP:
      drawlinea(color, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      drawlinea(color, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      drawlinea(color, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      drawlinea(color, x, y, x + movimiento, y, papel);
      x = x + movimiento;;
    break;
    default:
      alert("Está presionado otra tecla que no es una flecha");
    break;
  }
}

function drawlinea(color, xi, yi, xf, yf, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
