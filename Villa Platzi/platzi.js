var vp = document.getElementById("platzivil");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
  url : "tile.png",
  cargaOK: false
};

var vaca = {
  url : "vaca.png",
  cargaOK: false
};

var cerdo = {
  url : "cerdo.png",
  cargaOK: false
};

var pollo = {
  url : "pollo.png",
  cargaOK: false
};

var cantidad = aleatory(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargar);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

function cargar(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas(){
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos(){
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos(){
  pollo.cargaOK = true;
  dibujar();
}

function dibujar(){
  if (fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK){
    console.log(cantidad);
    for(var v = 0; v < cantidad; v++){
      var x = aleatory(0, 7);
      var y = aleatory(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.objeto, x, y);
    }
  }
  if (cerdo.cargaOK){
    for(var v = 0; v < cantidad; v++){
      var x = aleatory(0, 4);
      var y = aleatory(0, 4);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(cerdo.objeto, x, y);
    }
  }
  if (pollo.cargaOK){
    for(var v = 0; v < cantidad; v++){
      var x = aleatory(0, 7);
      var y = aleatory(0, 7);
      var x = x * 30;
      var y = y * 30;
      papel.drawImage(pollo.objeto, x, y);
    }
  }
}

function aleatory(min, max){
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

var cx = 150; var cy = 150;
var teclas = {UP:38, DOWN:40, LEFT: 37, RIGHT:39};
var movimiento = 5;
var cerdito = cerdo.objeto;
document.addEventListener("keydown",moverCerdo);

function moverCerdo(evento){
  switch (evento.keyCode){
    case teclas.UP://restar a y
      papel.drawImage(cerdito, cx, cy-movimiento);
      cy = cy - movimiento;
    break;
    case teclas.DOWN://sumar a y
      papel.drawImage(cerdito, cx-movimiento, cy);
      cy = cy + movimiento;
    break;
    case teclas.LEFT://restar a x
      papel.drawImage(cerdito, cx+movimiento, cy);
      cx = cx - movimiento;
    break;
    case teclas.RIGHT://Sumar a y
      papel.drawImage(cerdito, cx, cy+movimiento);
      cx = cx + movimiento;
    break;
    default:
      console.log("No se realiza ninguna accion.");
  }
}
