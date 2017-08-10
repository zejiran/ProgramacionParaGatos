
var j = require ("johnny-five");
var circuito = new cinco.Board();
var bombillo, motorcito;

circuito.on("ready", prender);

function prender(){
  var configuracion = {pin: "A0", freq: 50}
  celda = new cinco.Sensor(configuracion);

  bombillo = new cinco.Led(13);
  bombillo.on();

  motorcito = new cinco.Servo(9);
  motorcito.to(90);
  ondear();
}

function ondear(){
  setTimeout(ondear, 1000);
  var luz = celda.value;
  if(luz > 800){

  }
  else{
    motorcito.to
  }
}
