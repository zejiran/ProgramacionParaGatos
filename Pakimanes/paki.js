var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", "Tierra", 100, 30));
coleccion.push(new Pakiman("Pokacho", "Electrico", 80, 50));
coleccion.push(new Pakiman("Tocinauro", "Fuego", 120, 40));

for(var pakin of coleccion){
    pakin.mostrar();
}
