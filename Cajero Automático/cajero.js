class Billete{
  constructor(v, c){
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero(){
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  if(dinero <= 0){
    alert("Cantidad no válida");
  }
  for(var bi of caja){
    if(dinero > 0){
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad){
        papeles = bi.cantidad;
      }
      else{
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if(dinero > 1000){
    r.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad >;c";
  }
  else{
    for( var e of entregado){
      if(e.cantidad > 0){
        r.innerHTML = r.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}

var caja = [];
caja.push( new Billete (50, 3) );
caja.push( new Billete (20, 2) );
caja.push( new Billete (10, 2) );
var entregado = [];
var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
var r = document.getElementById("resultado");
b.addEventListener("click", entregarDinero);
